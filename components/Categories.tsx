"use client";

import Image from "next/image";
import React from "react";
import dots from "@/public/images/CatagoriesImages/dots.png";
import CategoryCard from "./CategoryCard";

import Slider from "react-slick";

export default function Categories() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-center">
        <Image src={dots} alt="dots" />
      </div>
      <div>
        <h2 className="text-center text-2xl text-primary font-semibold">
          Categories
        </h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </Slider>
      </div>
    </div>
  );
}
