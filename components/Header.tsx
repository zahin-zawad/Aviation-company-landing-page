import Image from "next/image";
import React from "react";
import fb from "@/public/images/HeaderImages/Facebook.svg";
import insta from "@/public/images/HeaderImages/Instagram.svg";
import Twitter from "@/public/images/HeaderImages/Twitter.svg";
import logo from "@/public/images/HeaderImages/logo.png";
import cart from "@/public/images/HeaderImages/Cart.svg";
import user from "@/public/images/HeaderImages/User.svg";

export default function Header() {
  return (
    <div>
      {/* upper blue bar starts */}
      <div className="w-full h-7 bg-primary text-white text-sm px-[72px] flex justify-between">
        <div className="left">
          <h2>
            Hotline: <span className="font-bold">+0186-1123325</span>
          </h2>
        </div>
        <div className="right flex gap-10">
          <h2>Contact Us</h2>
          <div className="flex gap-3">
            <Image src={fb} alt="fb" />
            <Image src={insta} alt="fb" />
            <Image src={Twitter} alt="fb" />
          </div>
        </div>
      </div>
      {/* upper blue bar ends */}

      {/* navbar starts here */}
      <div className="w-full h-20 shadow-md px-[72px] flex gap-20">
        <Image src={logo} alt="logo" className="my-auto"/>

        <ul className="flex gap-6 my-auto">
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>
        <input type="text"  placeholder="Search Products" className="w-96 h-auto my-4"/>

        <div className="flex gap-6">
          <Image src={cart} alt="cart"/>
          <Image src={user} alt="user"/>
        </div>
      </div>
    </div>
  );
}
