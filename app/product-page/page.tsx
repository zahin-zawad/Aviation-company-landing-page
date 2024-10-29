import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import coverImage from "@/public/images/ProductPageImages/coverImage.png";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSidebarProductPage from "@/components/CategoriesSidebarProductPage";
import Products from "@/components/Products";

export default function productPage() {
  return (
    <div className="container mx-auto font-title">
      <Header />
      <div className="w-full flex justify-center">
        <Image src={coverImage} alt="coverImage" className="bg-cover w-full" />
      </div>
      <div className="flex">
        <div className="hidden lg:block"><CategoriesSidebarProductPage /></div>
        <Products />
      </div>
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
