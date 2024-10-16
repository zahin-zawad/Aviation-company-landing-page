import Image from "next/image";
import React from "react";
import firstdotted from "@/public/images/TrustedByImages/anyrgb 3.png";
import icom from "@/public/images/TrustedByImages/image 11.png";
import antonio from "@/public/images/TrustedByImages/image 6.png";
import tq from "@/public/images/TrustedByImages/image 10.png";
import avmap from "@/public/images/TrustedByImages/image 12.png";
import germin from "@/public/images/TrustedByImages/image 7.png";
import pooleys from "@/public/images/TrustedByImages/image 9.png";
import avio from "@/public/images/TrustedByImages/image 8.png";

export default function TrustedBySection() {
  return (
    <div className="my-96">
      <div className="left">
        <Image
          src={firstdotted}
          alt="firstdotted"
          className="absolute mt-3 ml-52"
        />
        <Image src={icom} alt="icom" className="absolute mt-40 ml-80" />
        <Image src={antonio} alt="antonio" className="absolute mt-20 ml-96" />
        <Image src={tq} alt="tq" className="absolute mt-64 ml-96" />
        <Image src={avmap} alt="avmap" className="absolute mt-48 ml-[463px]" />
        <Image
          src={germin}
          alt="germin"
          className="absolute mt-24 ml-[569px]"
        />
        <Image
          src={pooleys}
          alt="pooleys"
          className="absolute mt-72 ml-[490px]"
        />
        <Image src={avio} alt="avio" className="absolute mt-48 ml-[612px]" />
      </div>

      <div className="right ">
        <h3 className=" absolute text-2xl font-semibold text-[#263746] mt-40 ml-[890px]">Trusted by</h3>
        <h3 className="absolute font-semibold text-4xl text-[#0487E2] mt-52 ml-[890px]">Worldclass Brands</h3>
      </div>
    </div>
  );
}
