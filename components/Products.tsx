import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

export default function Products() {
  return (
    <div className="bg-[#F5F5F5] w-full ">
        <div className="flex justify-between">
      <div className="left">
        <p className="ml-6 mt-16 text-[#6C6F70] text-sm">
          All “240” products are listed below.
        </p>
      </div>
      <div className="right ml-6 mt-16 mr-16">
        <div className="flex gap-6">
          <div className="show flex gap-3 items-center">
            <p className="text-base">Show:</p>
            <select name="" id="" className="p-3 border rounded bg-white">
              <option value="12">12</option>
            </select>
          </div>
          <div className="sort flex gap-3 items-center text-base">
            <p>Sort by:</p>
            <select name="" id="" className="p-3 border rounded bg-white">
              <option value="Most Popular">Most Popular</option>
            </select>
          </div>
        </div>

        
      </div>
    </div>
    <div className="products grid grid-cols-4 gap-6 mx-6">
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
            <FeaturedProductCard/>
        </div>
    </div>
  );
}
