'use client';

import Image from "next/image";
import React, { useState } from "react";
import fb from "@/public/images/HeaderImages/Facebook.svg";
import insta from "@/public/images/HeaderImages/Instagram.svg";
import Twitter from "@/public/images/HeaderImages/Twitter.svg";
import logo from "@/public/images/HeaderImages/logo.png";
import cart from "@/public/images/HeaderImages/Cart.svg";
import user from "@/public/images/HeaderImages/User.svg";
import search from "@/public/images/HeaderImages/Search.svg";

import {
  CloseOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import { Drawer } from "antd";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] = useState(false);
  
  return (
    <div>
      {/* upper blue bar starts */}
      <div className="w-full h-7 bg-primary text-white text-sm lg:px-16 px-4 flex justify-between items-center">
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
      <div className="flex w-full justify-between h-20 shadow-md lg:px-16 px-5">
        <div className="lg:hidden flex" onClick={() => setOpen(true)}>
          <MenuOutlined />
        </div>
        <div className=" flex gap-20 items-center">
          <Link href={'/'}><Image src={logo} alt="logo" className="my-auto" /></Link>

          <ul className="lg:flex gap-6 my-auto hidden">
              <Link href={'/'}>Home</Link>
							<Link href={'/shop'}>Shop</Link>
							<Link href={'/product-page'}>Products</Link>
							<Link href={'/about-us'}>About Us</Link>
							<Link href={'/blog'}>Blog</Link>
          </ul>
          <div className="w-96 h-12 my-4 border-2 pl-6 rounded-md lg:flex hidden relative items-center">
            <input type="text" placeholder="Search Products" className="focus:border-transparent outline-none" />
            <button className="bg-[#0487E2] absolute right-0 p-3 rounded-r-md hover:bg-[#169dfd]">
              <Image height={24} width={24} src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <Image src={cart} alt="cart" />
          <Image src={user} alt="user" />
        </div>
      </div>

      <Drawer
				destroyOnClose
				closeIcon={null}
				placement="left"
				open={open}
				onClose={() => setOpen(false)}
			>
				<CloseOutlined
					onClick={() => setOpen(false)}
					className="text-xl absolute top-5 right-5 cursor-pointer"
				/>
				<div className="flex flex-col gap-1.5 mt-8 text-base">
					<Link className="border-b p-1 text-black" href={'/'}>
						Home
					</Link>
					<Link className="border-b p-1 text-black" href={'/products'}>
						Shop
					</Link>
					<Link className="border-b p-1 text-black" href={'/about'}>
						Product
					</Link>
					<Link className="border-b p-1 text-black" href={'/blog'}>
						About Us
					</Link>
					<Link className="border-b p-1 text-black" href={'/contact'}>
						Blog
					</Link>
				</div>
			</Drawer>
    </div>
  );
}
