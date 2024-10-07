import AboutUs from '@/components/AboutUs'
import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import ComantSection from '@/components/ComantSection'
import ExcluliveParts from '@/components/ExcluliveParts'
import FeaturedProducts from '@/components/FeaturedProducts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import PartsFinder from '@/components/PartsFinder'
import React from 'react'

export default function HomePage() {
  return (
    <div className='container mx-auto font-title'>
      <Header/>
      <HeroSection/>
      <PartsFinder/>
      <Categories/>
      <AboutUs/>
      <FeaturedProducts/>
      <ExcluliveParts/>
      <ComantSection/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
