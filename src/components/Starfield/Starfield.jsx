import { useEffect, useRef } from 'react'
import './Starfield.css'

const PARALLAX = 36
const MOUSE_LERP = 0.07
const COUNT_FACTOR = 9000

const createParticles = (width, height) => {
  const count = Math.min(160, Math.floor((width * height) / COUNT_FACTOR))

  return Array.from({ length: count }, () => {
    const bright = Math.random() < 0.12
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + 0.35,
      opacity: bright ? Math.random() * 0.35 + 0.45 : Math.random() * 0.35 + 0.12,
      depth: Math.random() * 0.75 + 0.25,
      phase: Math.random() * Math.PI * 2,
      color: bright ? '186, 230, 253' : '148, 163, 184',
    }
  })
}

const Starfield = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const sizeRef = useRef({ width: 0, height: 0 })
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let frameId = 0

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      sizeRef.current = { width, height }
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particlesRef.current = createParticles(width, height)
    }

    const onPointer = (clientX, clientY) => {
      const { width, height } = sizeRef.current
      mouseRef.current.targetX = (clientX / width - 0.5) * 2
      mouseRef.current.targetY = (clientY / height - 0.5) * 2
    }

    const onMouseMove = (e) => onPointer(e.clientX, e.clientY)

    const onTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) onPointer(touch.clientX, touch.clientY)
    }

    const draw = (time) => {
      const { width, height } = sizeRef.current
      const mouse = mouseRef.current

      mouse.x += (mouse.targetX - mouse.x) * MOUSE_LERP
      mouse.y += (mouse.targetY - mouse.y) * MOUSE_LERP

      ctx.clearRect(0, 0, width, height)

      for (const p of particlesRef.current) {
        const drift = reducedMotionRef.current
          ? 0
          : Math.sin(time * 0.0008 + p.phase) * 0.25
        const offsetX = mouse.x * p.depth * PARALLAX
        const offsetY = mouse.y * p.depth * PARALLAX

        let x = p.x + offsetX
        let y = p.y + offsetY

        if (x < 0) x += width
        if (x > width) x -= width
        if (y < 0) y += height
        if (y > height) y -= height

        ctx.beginPath()
        ctx.arc(x, y, p.radius + drift, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()
      }

      if (!reducedMotionRef.current) {
        frameId = requestAnimationFrame(draw)
      }
    }

    setSize()
    draw(0)

    window.addEventListener('resize', setSize)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <div className="starfield" aria-hidden="true">
      <canvas ref={canvasRef} className="starfield__canvas" />
    </div>
  )
}

export default Starfield
