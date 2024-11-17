import Footer from '@/layouts/Footer'
import Hero from '@/layouts/Hero'
import Navbar from '@/layouts/Navbar'
import Project from '@/layouts/Project'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        <Project />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home