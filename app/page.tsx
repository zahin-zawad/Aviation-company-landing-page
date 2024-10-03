import AboutUs from '@/components/AboutUs'
import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import PartsFinder from '@/components/PartsFinder'
import React from 'react'

export default function HomePage() {
  return (
    <div className='container mx-auto'>
      <Header/>
      <HeroSection/>
      <PartsFinder/>
      <Categories/>
      <AboutUs/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
