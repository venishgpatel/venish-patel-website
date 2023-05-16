import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Notification from '@/components/Notification'

export default function Home() {
  return (
    <>
      <Notification
        content="Site under maintenance, sorry for the inconvenience."
        options={{
          type: 'warning'
        }}
      />
      <Header></Header>
      <main className='container'>
        <Hero
          variant='introHomePage'
          title='Venish Patel'
          description={'💻 Software Engineer based in 📍San Francisco Bay Area. 💡 Proficient in developing high-quality web experiences that are well-designed and accessible.'}
        />
      </main>
      <Footer></Footer>
    </>
  )
}
