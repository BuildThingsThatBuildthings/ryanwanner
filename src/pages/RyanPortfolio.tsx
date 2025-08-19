import React from 'react'
import { Header } from '../components/layout/Header'
import { Hero } from '../components/sections/Hero'
import { Business } from '../components/sections/Business'
import { Tech } from '../components/sections/Tech'
import { CTA } from '../components/sections/CTA'
import { Footer } from '../components/layout/Footer'

export function RyanPortfolio() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Business />
        <Tech />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}