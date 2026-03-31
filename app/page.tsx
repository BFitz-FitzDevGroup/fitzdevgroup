import { Nav }      from '@/components/Nav'
import { Hero }     from '@/components/Hero'
import { Services } from '@/components/Services'
import { Stack }    from '@/components/Stack'
import { About }    from '@/components/About'
import { Process }  from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { Contact }  from '@/components/Contact'
import { Footer }   from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Stack />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
