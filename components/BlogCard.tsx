import React from "react";
import blogImage from "@/public/images/BlogImages/image.png";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="w-[416px] h-[315px] shadow-lg rounded-lg flex flex-col items-center justify-center">
      <Image src={blogImage} alt="blogImage" />
      <h2 className="text-lg font-semibold mt-6">
        Factors to consider when buying aircraft parts
      </h2>
      <a href="" className="text-blue-700 underline mt-3">
        Read More
      </a>
    </div>
  );
}
