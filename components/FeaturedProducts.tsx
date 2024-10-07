import Image from "next/image";
import React from "react";
import LeftCheveron from "@/public/images/FeaturedProductsImages/Left Chevron.svg";
import RightCheveron from "@/public/images/FeaturedProductsImages/Right Chevron.svg";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProducts() {
  return (
    <div className="w-full h-[548px] bg-[#f4f5f6]">
      <div className="flex justify-between pt-12 mx-[72px]">
        <h3 className="text-[#0487E2] text-2xl font-semibold">
          Featured Products
        </h3>
        <div className="flex">
          <Image src={LeftCheveron} alt="LeftCheveron" />
          <Image src={RightCheveron} alt="RightCheveron" />
        </div>
      </div>
      <div className="flex gap-6 mt-9 ml-[72px]">
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
        <FeaturedProductCard/>
      </div>
    </div>
  );
}
