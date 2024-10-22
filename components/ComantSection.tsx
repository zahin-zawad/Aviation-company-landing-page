import Image from 'next/image'
import React from 'react'
import comantImage from '@/public/images/ComantSectionImages/image(1).png'
import superiorImage from '@/public/images/ComantSectionImages/image(2).png'

export default function ComantSection() {
  return (
    <div className='lg:flex w-full gap-6 justify-center py-12 px-16'>
        <Image className='w-full' src={comantImage} alt='comantImage'/>
        <Image className='w-full' src={superiorImage} alt='superiorImage'/>
    </div>
  )
}
