import Image from "next/image";
import React from "react";

import planecoverimage from "@/public/images/AircraftSuppliesImages/planecoverphoto.png";
import FeaturedProductCard from "./FeaturedProductCard";

export default function AircraftSupplies() {
  return (
    <div>
      <div className="bg-cover bg-aircraftSuppliesCoverphoto">
        <h3 className="text-4xl font-semibold mt-[72px] ml-[182px]">Aircraft Supplies</h3>
        <button className="mt-[18px] ml-[182px]">View All</button>
      </div>

      <div className="lg:flex bg-[#f4f5f6]">
        <div className="sidebar ml-16">
          <h3 className="font-semibold text-2xl text-center lg:text-left mb-6 mt-12">Aircraft Supplies</h3>

          <div className="w-56 mt-6 hidden lg:block">
            <h4 className="font-semibold text-sm bg-[#0487E2] text-white rounded p-3">
              Accessories
            </h4>
            <h4 className="p-3 font-semibold text-sm">Cleaning & Polishing</h4>
            <h4 className="p-3 font-semibold text-sm">Covers</h4>
            <h4 className="p-3 font-semibold text-sm">Engine</h4>
            <h4 className="p-3 font-semibold text-sm">Pitot Probe</h4>
            <h4 className="p-3 font-semibold text-sm">Tools & Materials</h4>
          </div>
        </div>
        <div className="products grid lg:grid-cols-4 mb-14 grid-cols-2 gap-5 mx-3 ml-9 mt-12">
          <FeaturedProductCard/>
          <FeaturedProductCard/>
          <FeaturedProductCard/>
          <FeaturedProductCard/>
        </div>
      </div>
    </div>
  );
}
