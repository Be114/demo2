import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Contact />
      <Footer />
    </main>
  )
}