import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className='container'>
        <Hero
          variant='introHomePage'
          title='Venish Patel'
          // subTitle='San Francisco Bay Area'
          description={'💻 Software Engineer based in 📍San Francisco Bay Area. 💡 Proficient in developing high-quality web experiences that are well-designed and accessible.'}
        />
      </main>
      <Footer></Footer>
    </>
  )
}
