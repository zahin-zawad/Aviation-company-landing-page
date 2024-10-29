import Image from 'next/image'
import React from 'react'
import cardImage from '@/public/images/FeaturedProductsImages/cardImage.png'

export default function FeaturedProductCard() {
  return (
    <div className=' bg-white flex flex-col items-center rounded-lg gap-3 px-1 pb-3 pt-1'>
        <Image src={cardImage} alt='cardImage' height={228} width={228}/>
        <div className='flex flex-col items-center'>
        <h3 className='text-center text-base font-semibold w-52'>G3X Touch™ for Experimental Aircraft GDU 4</h3>
        <h3 className='text-[#0363CA] font-normal text-xl'>৳ 1,400</h3>
        </div>
        <button className='bg-[#0487E2] w-full m-3 text-white px-6 py-3 font-bold text-sm rounded hover:bg-[#169dfd]'>Add to Cart</button>
    </div>
  )
}
