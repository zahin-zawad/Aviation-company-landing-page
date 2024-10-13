import Image from 'next/image'
import React from 'react'
import plane from '@/public/images/AboutUsImages/1.png'
import logo from '@/public/images/AboutUsImages/2.png'
import propeller from '@/public/images/AboutUsImages/3.png'
import anyrgb7 from '@/public/images/AboutUsImages/anyrgb 7.png'
import anyrgb8 from '@/public/images/AboutUsImages/anyrgb 8.png'

export default function AboutUs() {
  return (
    <div className='xl:flex relative'>
        <div className="left w-2/4">
            <h2 className='mt-32 ml-48 text-[#0487E2] font-semibold text-2xl'>About Us</h2>
            <h2 className='ml-48 mt-3 text-4xl w-[306px] font-semibold'>LEADERS IN THE AIRCRAFT SECTOR</h2>
            <h2 className='mt-6 ml-48 w-[416px] text-[#909090]'>Sky Gears has been the supplier that aircraft builders, owners, pilots, and aviation businesses have depended on since 1965. We carry a wide selection of aircraft parts.</h2>
            <h2 className='mt-8 ml-48 underline text-[#0487E2] text-sm'>Learn More</h2>
        </div>
        <div className="right w-2/4 mt-16 px-28 py-[72px]">
            <div className="top flex">
                <Image src={plane} alt='plane' className='w-64 h-44'/>
                <div className='w-[204px] h-[180px] px-6 py-10'>
                    <Image src={logo} alt='logo'/>
                </div>
                
            </div>
            <Image src={propeller} alt='propeller' 
            className='mt-6 ml-14' 
            height={180} 
            width={428} />
            <Image src={anyrgb7} alt='anyrgb7'
            className='absolute ml-[1000px] mt-[329px]' />
        </div>
    </div>
  )
}
