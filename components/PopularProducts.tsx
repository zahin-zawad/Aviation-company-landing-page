import Image from "next/image";
import React from "react";
import LeftCheveron from "@/public/images/FeaturedProductsImages/Left Chevron.svg";
import RightCheveron from "@/public/images/FeaturedProductsImages/Right Chevron.svg";
import FeaturedProductCard from "./FeaturedProductCard";

export default function PopularProducts() {
  return (
    <div className="w-full bg-[#f4f5f6] pb-10">
      <div className="flex justify-between pt-12 mx-16">
        <h3 className="text-[#0487E2] text-2xl font-semibold">
          Popular Products
        </h3>
        <div className="flex">
          <Image src={LeftCheveron} alt="LeftCheveron" />
          <Image src={RightCheveron} alt="RightCheveron" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex gap-6 ml-8 mr-8 mt-9 lg:ml-16">
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
      </div>
    </div>
  )
}
