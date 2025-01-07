import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import ComantSection from "@/components/ComantSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import PartsFinder from "@/components/PartsFinder";

import React from "react";
import AircraftSupplies from "@/components/AircraftSupplies";
import PopularProducts from "@/components/PopularProducts";

export default function HomePage() {
  return (
    <div className="container mx-auto font-title">
      <Header />
      <HeroSection />
      {/* <SimpleSlider/> */}
      <PartsFinder />
      <Categories />
      <AboutUs />
      <FeaturedProducts />
      {/* <ExcluliveParts/> */}
      {/* <TrustedBySection/> */}
      <AircraftSupplies />
      <ComantSection />
      <PopularProducts />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
