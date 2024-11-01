import Image from 'next/image'
import React from 'react'
import cardImage from '@/public/images/CatagoriesImages/CardImage.png'

export default function CategoryCard() {
  return (
    <div className='bg-[#2637460D] px-6 py-3 rounded-sm m-6 flex flex-col items-center gap-2.5 h-[196px] w-[194px] mx-6'>
        <Image src={cardImage} alt='cardImage' height={120} width={120}/>
        <h2>Aircraft Supplies</h2>
    </div>
  )
}
