import Image from 'next/image'
import React from 'react'
import cardImage from '@/public/images/CatagoriesImages/CardImage.png'

export default function CategoryCard() {
  return (
    <div className='bg-[#2637460D] px-6 py-3 w-[196px] h-[194px]'>
        <Image src={cardImage} alt='cardImage'/>
        <h2>Aircraft Supplies</h2>
    </div>
  )
}
