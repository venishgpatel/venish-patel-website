import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Notification from '@/components/Notification'

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
