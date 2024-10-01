import Image from 'next/image'
import React from 'react'
import dots from '@/public/images/CatagoriesImages/dots.png'
import CategoryCard from './CategoryCard'
import rightChevron from "@/public/images/HeroSectionImages/Right Chevron.svg";

export default function Categories() {
  return (
    <div>
        <div className='flex justify-center'>
            <Image src={dots} alt='dots'/>
        </div>
        <div className='flex justify-center'>
            <h2 className='text-2xl text-primary font-semibold'>Categories</h2>
        </div>
        <div className='flex gap-6 mt-9 mx-[72px] pb-16'>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <Image src={rightChevron} alt='rightChevron'/>
            
        </div>
    </div>
  )
}
