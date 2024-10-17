import Image from "next/image";
import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import rightCheveron from '@/public/images/Right Chevron.svg'

export default function Pooleys() {
  return (
    <div className="w-full bg-[#ebecec] pb-10">
      <div className="flex justify-between pt-12 mx-16">
        <h3 className="text-[#0487E2] text-2xl font-semibold">
          Pooley's
        </h3>
        <div className="flex">
          <button className="bg-[#0487E2] text-white p-1.5 pl-3 rounded flex gap-1.5 items-center justify-center">View All <Image src={rightCheveron} alt="rightCheveron"/></button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex gap-6 ml-4 mt-9 lg:ml-16">
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
      </div>
    </div>
  );
}
