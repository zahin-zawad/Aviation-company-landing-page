import AboutUs from '@/components/AboutUs'
import AboutUsHero from '@/components/AboutUsHero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newsletter from '@/components/Newsletter'
import ProductGuarantee from '@/components/ProductGuarantee'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div className='container mx-auto font-title'>
      <Header/>
      <AboutUsHero/>
      <AboutUs/>
      <ProductGuarantee/>
      <FeaturedProducts/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
