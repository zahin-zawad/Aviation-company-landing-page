import Image from "next/image";
import React from "react";
import fb from "@/public/images/HeaderImages/Facebook.svg";
import insta from "@/public/images/HeaderImages/Instagram.svg";
import Twitter from "@/public/images/HeaderImages/Twitter.svg";
import logo from "@/public/images/HeaderImages/logo.png";
import cart from "@/public/images/HeaderImages/Cart.svg";
import user from "@/public/images/HeaderImages/User.svg";
import search from "@/public/images/HeaderImages/Search.svg";

export default function Header() {
  return (
    <div>
      {/* upper blue bar starts */}
      <div className="w-full h-7 bg-primary text-white text-sm px-16 flex justify-between items-center">
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
      <div className="flex justify-between w-full h-20 shadow-md px-16">
        <div className=" flex gap-20">
          <Image src={logo} alt="logo" className="my-auto" />

          <ul className="lg:flex gap-6 my-auto hidden">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <div className="w-96 h-auto my-4 border-2 pl-6 rounded-md flex relative items-center">
            <input type="text" placeholder="Search Products" />
            <button className="bg-[#0487E2] absolute right-0 p-3 rounded-r-md">
              <Image height={24} width={24} src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <Image src={cart} alt="cart" />
          <Image src={user} alt="user" />
        </div>
      </div>
    </div>
  );
}
