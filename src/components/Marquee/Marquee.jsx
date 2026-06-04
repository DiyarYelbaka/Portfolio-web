import './Marquee.css'

const items = [
  'React Native',
  'Expo',
  'TypeScript',
  'Zustand',
  'Redux',
  'GraphQL',
  'Reanimated',
  'CI/CD',
  'Clean Architecture',
  'App Store',
]

const MarqueeGroup = ({ id }) => (
  <div className="marquee__group" aria-hidden={id === 'b' ? true : undefined}>
    {items.map((item) => (
      <span key={`${id}-${item}`} className="marquee__item">
        {item}
        <span className="marquee__dot">◆</span>
      </span>
    ))}
  </div>
)

const Marquee = () => {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__inner">
        <MarqueeGroup id="a" />
        <MarqueeGroup id="b" />
      </div>
    </div>
  )
}

export default Marquee
