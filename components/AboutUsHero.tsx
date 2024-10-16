import Image from "next/image";
import React from "react";
import dots from "@/public/images/AboutUsHeroImages/anyrgb 9.png";
import heroImage from "@/public/images/AboutUsHeroImages/heroImage.png";

export default function AboutUsHero() {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={dots} alt="dots" />
      </div>

      <h2 className="text-center text-4xl font-semibold text-[#0487E2]">About Us</h2>
      <div className="flex justify-center">
      <h4 className="text-center mt-6 text-base w-[636px] mb-11">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu
        turpis vitae tincidunt in diam aliquet. Molestie sed sem malesuada ipsum
        amet etiam mollis. Quam sed sodales sed neque sagittis eu convallis
        tortor.
      </h4>
      </div>
      <Image src={heroImage} alt="heroImage" />
    </div>
  );
}
