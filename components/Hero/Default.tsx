import { HeroProps } from "./types"

const Default = ({ variant, title, subTitle, description }: HeroProps) => {
  return (
    <div className="cmp-hero__wrapper flex flex-col gap-6 justify-center h-[91vh] container">
      <div>Hi, I am <h1 className='font-extrabold inline text-3xl'>Venish Patel</h1></div>
      <p className=''>{description}</p>
    </div>
  )
}

export default Default