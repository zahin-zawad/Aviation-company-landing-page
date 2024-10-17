import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import aircraftSupplies from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Aircraft Supplies.png'
import airfieldEquipment from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Airfield Equipment.png'
import antennas from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Antennas.png'
import autopilots from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Autopilots.png'
import aviationGifts from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Aviation Gifts.png'
import cameras from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Cameras.png'
import emergencySystems from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Emergency Systems.png'
import engineInstruments from '@/public/images/ProductPageImages/CategoriesSidebarProductPageImages/Engine Instruments.png'
import { AlignRightOutlined } from '@ant-design/icons'



export default function CategoriesSidebarProductPage() {
  return (
    <div className='h-[1367px] w-80 bg-white'>
        <h2 className='font-semibold text-lg mt-12 ml-16'>Categories</h2>
        <ul className='lg:flex flex-col ml-16 gap-1.5 mt-3'>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={aircraftSupplies} alt='aircraftSupplies'/>
            Aircraft Supplies</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={airfieldEquipment} alt='aircraftSupplies'/>
            Airfield Equipment</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={antennas} alt='aircraftSupplies'/>
            Antennas</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={autopilots} alt='aircraftSupplies'/>
            Autopilots</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={aviationGifts} alt='aircraftSupplies'/>
            Aviation Gifts</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={cameras} alt='aircraftSupplies'/>
            Cameras</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={emergencySystems} alt='aircraftSupplies'/>
            Emergency Systems</Link>
            <Link className='px-3 py-1.5 flex gap-3 text-base' href={'#'}>
            <Image src={engineInstruments} alt='aircraftSupplies'/>
            Engine Instruments</Link>
        </ul>
        <h2 className='ml-16 mt-6 font-semibold text-lg'>Price</h2>
        <div className='flex ml-16 mt-3 items-center gap-1.5'>
        <input type="text" placeholder='min' className='px-3 py-2.5 w-16 border rounded'/>
        <p className='text-sm text-[#BEBEBE]'>to</p>
        <input type="text" placeholder='max' className='px-3 py-2.5 w-16 border rounded'/>
        <button className='bg-[#0487E2] px-3 py-2.5 rounded text-white'>Go</button>
        </div>

    </div>
  )
}
