import Image from 'next/image'
import React from 'react'
import plane from '@/public/images/AboutUsImages/1.png'
import logo from '@/public/images/AboutUsImages/2.png'
import propeller from '@/public/images/AboutUsImages/3.png'

export default function AboutUs() {
  return (
    <div className='flex flex-col lg:flex-row items-center p-28'>
        <div className="left lg:w-2/4">
            <h2 className='mt-32 text-[#0487E2] font-semibold text-2xl'>About Us</h2>
            <h2 className=' mt-3 text-4xl w-[306px] font-semibold'>LEADERS IN THE AIRCRAFT SECTOR</h2>
            <h2 className='mt-6 w-96 text-[#909090]'>Sky Gears has been the supplier that aircraft builders, owners, pilots, and aviation businesses have depended on since 1965. We carry a wide selection of aircraft parts.</h2>
            <h2 className='mt-8 underline text-[#0487E2] text-sm'>Learn More</h2>
        </div>
        
        <div className='right lg:w-2/4 mt-5'>
           <div className='flex gap-3'>
           <Image src={plane} alt='plane'/>
           <Image src={logo} alt='logo'/>
           </div>
           <Image src={propeller} alt='propeller' className='mt-5'/>
        </div>
    </div>
  )
}
