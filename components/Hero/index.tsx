import { HeroProps } from "./types"
import Default from "./Default"

const Hero = (props: HeroProps) => {
  let HeroMarkup;

  switch (props.variant) {
    case "introHomePage":
      HeroMarkup = Default
      break
    default:
      return null
  }

  return (
    <section className={`cmp-hero ${props.variant}`}>
      <HeroMarkup {...props} />
    </section>
  )
}

export default Hero