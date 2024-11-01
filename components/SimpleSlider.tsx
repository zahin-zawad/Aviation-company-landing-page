'use client';

import HeroImage from "@/public/images/HeroSectionImages/HeroImage.png";
import Image from 'next/image';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

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
        <Image src={HeroImage} alt="HeroImage" />
        <Image src={HeroImage} alt="HeroImage" />
        <Image src={HeroImage} alt="HeroImage" />
      </Slider>
    );
  }