import React from "react";
import logo from "@/public/images/FooterImages/logo.png";
import Image from "next/image";
import fb from "@/public/images/FooterImages/Facebook(1).svg";
import insta from "@/public/images/FooterImages/Instagram(1).svg";
import twitter from "@/public/images/FooterImages/Twitter(1).svg";
import masterCard from "@/public/images/FooterImages/masterCard.png";
import visa from "@/public/images/FooterImages/VisaCard.png";
import payoneer from "@/public/images/FooterImages/payoneer.png";
import americanExpress from "@/public/images/FooterImages/amrticanExpress.png";
import paypal from "@/public/images/FooterImages/PayPal.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#e6f3fc]">
      <div className="px-4 lg:mx-16 lg:flex  gap-10 justify-between pt-20">
        <div className="">
        <Link href={'/'}><Image src={logo} alt="logo" /></Link>

          <h3 className="lg:w-80 w-full my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            vestibulum enim dignissim placerat egestas est in aliquet. Ut id sed
            augue sapien mus at purus id faucibus.
          </h3>

          <div className="flex gap-3">
            <Image src={fb} alt="fb" />
            <Image src={insta} alt="fb" />
            <Image src={twitter} alt="fb" />
          </div>
        </div>

        
        <div className=" flex flex-col">
          <p className="text-lg font-bold mb-6">Menus</p>
          <Link href={'/'} className="mb-3 text-[#6C6F70]">Home</Link>
          <Link href={'/shop'} className="mb-3 text-[#6C6F70]">Shop</Link>
          <Link href={'/product-page'} className="mb-3 text-[#6C6F70]">Products</Link>
          <Link href={'/about-us'} className="mb-3 text-[#6C6F70]">About Us</Link>
          <Link href={'/blog'} className="mb-3 text-[#6C6F70]">Blog</Link>

        </div>
        <div className="">
          <p className="text-lg font-bold mb-6">Contact</p>
          <p className="text-[#0487E2] font-bold text-sm">Call</p>
          <p className="mb-3 text-[#6C6F70]">+01865525562</p>
          <p className="text-[#0487E2] font-bold text-sm">Email</p>
          <p className="mb-3 text-[#6C6F70]">info@skygears.com</p>
          <p className="text-[#0487E2] font-bold text-sm">Address</p>
          <p className="mb-3 text-[#6C6F70] w-[180px]">
            Street 3-11A, North Road, Dhaka-1200
          </p>
        </div>

        <div className="flex flex-col">
          <Link href={"/"} className="text-lg font-bold mb-6">Policy</Link>
          <Link href={"/"} className="mb-3 text-[#6C6F70]">Terms & Conditions</Link>
          <Link href={"/"} className="mb-3 text-[#6C6F70]">Information Policy</Link>
          <Link href={"/"} className="mb-3 text-[#6C6F70]">Refund Policy</Link>
          <Link href={"/"} className="mb-3 text-[#6C6F70]">Privacy & Policy</Link>
          <Link href={"/"} className="mb-3 text-[#6C6F70]">Payment</Link>
        </div>

        <div className="">
          <p className="text-lg font-bold mb-6">Payment</p>
          <div className="flex gap-4">
            <Image src={masterCard} alt="masterCard" />
            <Image src={visa} alt="visa" />
            <Image src={payoneer} alt="payoneer" />
          </div>
          <div className="flex gap-4 mt-2">
            <Image src={americanExpress} alt="americanExpress" />
            <Image src={paypal} alt="paypal" />
          </div>
        </div>
        
      </div>

      <h2 className="mt-8 text-[#6C6F70] text-base flex justify-center">
        Copyright 2024 Ⓒ Sky Gears. All rights reserved
      </h2>
    </div>
  );
}
