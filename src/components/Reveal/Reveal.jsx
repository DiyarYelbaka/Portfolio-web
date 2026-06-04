import { useReveal } from '../../hooks/useReveal'

const Reveal = ({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  threshold,
  rootMargin,
}) => {
  const [ref, visible] = useReveal({ threshold, rootMargin })

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
