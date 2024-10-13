'use client';

import Image from "next/image";
import React, { useState } from "react";
import HeroImage from "@/public/images/HeroSectionImages/HeroImage.png";
import bulletedList from "@/public/images/HeroSectionImages/Bulleted List.svg";
import rightChevron from "@/public/images/HeroSectionImages/Right Chevron.svg";
import downChevron from "@/public/images/HeroSectionImages/DownChevron.svg";

import {
   CloseOutlined,
    MenuOutlined,
 } from '@ant-design/icons';
 import { Drawer } from "antd";
 import Link from "next/link";
 

export default function HeroSection() {

   const [open, setOpen] = useState(false);
   
  return (
    <div className="mt-6 flex gap-6 mx-16">
      <div className="left hidden lg:block">
        <div className="w-80 h-12 bg-[#0487E2] flex text-white p-3 rounded-t-md">
          <Image src={bulletedList} alt="bulletedList" />
          <h2>Categories</h2>
        </div>
        <ul className="border-[#0487E2] border-2 rounded-b-md">
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Aircraft Supplies</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Airfield Equipment</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Antennas</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Autopilots</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Aviation Gifts</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Cameras</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Emergency systems</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Engine instruments</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6">
            <h2>Gliding equipment</h2>
            <Image src={rightChevron} alt="rightChevron" />
          </li>
          <li className="flex justify-between py-3 pr-3 pl-6 bg-black-rgba rounded-b-md">
            <h2>View More</h2>
            <Image src={downChevron} alt="downChevron" />
          </li>
        </ul>
      </div>
      <div className="right">
         <div onClick={() => setOpen(true)} className="h-12 bg-[#0487E2] flex text-white p-3 rounded mb-2 lg:hidden">
            <Image src={bulletedList} alt="bulletedList" />
            <h2>Categories</h2>
         </div>
        <div className="flex gap-3">
          <Image src={HeroImage} alt="HeroImage" />
          <Image src={rightChevron} alt="rightCheveron" />
        </div>
      </div>

      <Drawer
				destroyOnClose
				closeIcon={null}
				placement="left"
				open={open}
				onClose={() => setOpen(false)}
			>
				<CloseOutlined
					onClick={() => setOpen(false)}
					className="text-xl absolute top-5 right-5 cursor-pointer"
				/>
				<div className="flex flex-col gap-1.5 mt-8 text-base">
					<Link className="border-b p-1 text-black" href={'/'}>
               Aircraft Supplies
					</Link>
					<Link className="border-b p-1 text-black" href={'/products'}>
               Airfield Equipment
					</Link>
					<Link className="border-b p-1 text-black" href={'/about'}>
               Antennas
					</Link>
					<Link className="border-b p-1 text-black" href={'/blog'}>
               Autopilots
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               Aviation Gifts
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               Cameras
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               Emergency systems
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               Engine instruments
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               Gliding equipment
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
               View More
					</Link>
				</div>
			</Drawer>
    </div>
  );
}
