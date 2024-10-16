import Image from "next/image";
import React from "react";

import planecoverimage from "@/public/images/AircraftSuppliesImages/planecoverphoto.png";
import FeaturedProductCard from "./FeaturedProductCard";

export default function AircraftSupplies() {
  return (
    <div>
      <div className="bg-cover bg-aircraftSuppliesCoverphoto">
        <h3 className="text-4xl font-semibold">Aircraft Supplies</h3>
        <button>View All</button>
      </div>

      <div className="lg:flex bg-[#f4f5f6]">
        <div className="sidebar">
          <h3 className="font-semibold text-2xl text-center lg:text-left">Aircraft Supplies</h3>

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
        <div className="products grid lg:grid-cols-4 grid-cols-2 gap-5">
          <FeaturedProductCard/>
          <FeaturedProductCard/>
          <FeaturedProductCard/>
          <FeaturedProductCard/>
        </div>
      </div>
    </div>
  );
}
