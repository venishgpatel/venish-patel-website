import Link from "next/link"

const Job = ({ period, title, link, description, tags }) => {
  return (
    <section className='flex flex-col laptop:flex-row gap-3'>
      <div className="laptop:basis-2/12 text-sm font-semibold laptop:my-1">{period}</div>
      <div className='laptop:basis-10/12 flex flex-col gap-3'>
        <div className='link font-bold text-lg'>
          <Link href={link} target='_blank'>
            {title}
          </Link>
        </div>
        <div className='whitespace-pre-wrap'>{description}</div>
        <div className='flex gap-3 flex-wrap'>{tags.map((tag: string, index) => (
          <div
            key={index}
            className='text-sm py-1 px-3 rounded-full bg-primary-80 text-primary whitespace-nowrap'
          >
            {tag}
          </div>
        ))}</div>
      </div>
    </section>
  )
}

export default Job