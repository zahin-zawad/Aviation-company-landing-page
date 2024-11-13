"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import HeroImage from "@/public/images/HeroSectionImages/HeroImage.png";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Image src={HeroImage} alt=""/>
      <Image src={HeroImage} alt=""/>
      <Image src={HeroImage} alt=""/>
    </Slider>
  );
}