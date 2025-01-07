import Footer from '@/components/Footer'
import Garmin from '@/components/Garmin'
import Header from '@/components/Header'
import Icom from '@/components/Icom'
import PartsFinder from '@/components/PartsFinder'
import Pooleys from '@/components/Pooleys'
import ShopCover from '@/components/ShopCover'
import React from 'react'

export default function shop() {
  return (
    <div className="container mx-auto font-title">
      <Header/>
      <ShopCover/>
      {/* <TrustedBySection/> */}
      <PartsFinder/>
      <Garmin/>
      <Icom/>
      <Pooleys/>
      <Footer/>
    </div>
  )
}
