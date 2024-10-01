import AboutUs from '@/components/AboutUs'
import Categories from '@/components/Categories'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import PartsFinder from '@/components/PartsFinder'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <PartsFinder/>
      <Categories/>
      <AboutUs/>
      <Newsletter/>
    </div>
  )
}
