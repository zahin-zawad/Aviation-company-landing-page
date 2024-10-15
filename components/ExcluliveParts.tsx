import React from "react";
import planeImage from "@/public/images/ExclusivePartsImages/planeImage.png";
import Image from "next/image";

export default function ExcluliveParts() {
  return (
    <div className="lg:flex">
      <div className="left">
        <Image src={planeImage} alt="planeImage" className="w-full"/>
      </div>
      <div className="right bg-[#0487E2] py-28">
        <h2 className="text-4xl font-semibold text-white lg:mt-28 ml-12">Get Exclusive Custom Parts</h2>
        <h3 className="text-white text-base ml-12 mt-4 w-96">Sky Gears has been the supplier that aircraft builders, owners, pilots, and aviation businesses have depended on since 1965. We carry a wide selection of aircraft parts.</h3>
        <button className="px-6 py-3 font-bold text-sm bg-white rounded ml-12 mt-6">Apply Now</button>
      </div>
    </div>
  );
}
