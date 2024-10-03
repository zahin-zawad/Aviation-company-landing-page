import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/HeroSectionImages/HeroImage.png";
import bulletedList from "@/public/images/HeroSectionImages/Bulleted List.svg";
import rightChevron from "@/public/images/HeroSectionImages/Right Chevron.svg";
import downChevron from "@/public/images/HeroSectionImages/DownChevron.svg";

export default function HeroSection() {
  return (
    <div className="mt-6 flex gap-6 mx-[72px]">
      <div>
        <div className="left w-80 h-12 bg-[#0487E2] flex text-white p-3 rounded-t-md">
          <Image src={bulletedList} alt="bulletedList" />
          <h2>Categories</h2>
        </div>
        <ul className="border-[#0487E2] border-2 rounded-b-md">
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Aircraft Supplies</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Airfield Equipment</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Antennas</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Autopilots</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Aviation Gifts</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Cameras</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Emergency systems</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Engine instruments</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6">
               <h2>Gliding equipment</h2>
               <Image src={rightChevron} alt="rightChevron"/>
            </li>
            <li className="flex justify-between py-3 pr-3 pl-6 bg-black-rgba rounded-b-md">
               <h2>View More</h2>
               <Image src={downChevron} alt="downChevron"/>
            </li>
        </ul>
      </div>
      <div className="right flex gap-3">
        <Image src={HeroImage} alt="HeroImage" />
        <Image src={rightChevron} alt="rightCheveron"/>
      </div>
    </div>
  );
}
