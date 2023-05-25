import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Notification from '@/components/Notification'
import Job from '@/components/Job'
import jobs from '@/data/jobs'

export default function Home() {
  return (
    <>
      <Notification
        content="Site revamp in progress. I'll be back shortly with exciting new updates!"
        options={{
          type: 'warning',
          toastId: 'revamp-message'
        }}
      />
      <Header></Header>
      <main className=''>
        <Hero
          variant='introHomePage'
          title='Venish Patel'
          description={'💻 Software Engineer based in 📍San Francisco Bay Area. 💡 Proficient in developing high-quality web experiences that are well-designed and accessible.'}
        />
        <section className='container'>
          <h2 className='text-4xl font-bold text-neutral-20 mb-10'>
            Where I&rsquo;ve worked
          </h2>
          <div className='flex flex-col gap-16 desktop:gap-8'>
            {jobs.map((job, index) => (
              <Job {...job} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
