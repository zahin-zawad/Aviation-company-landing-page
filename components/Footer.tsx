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

export default function Footer() {
  return (
    <div className="bg-[#e6f3fc]">
      <div className="mx-16 lg:flex justify-between pt-20">
        <div className="mt-12">
          <Image src={logo} alt="logo" />

          <h3 className="w-80 my-12">
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

        <div className="">
          <h3 className="text-lg font-bold mb-6">Menus</h3>
          <h3 className="mb-3 text-[#6C6F70]">Home</h3>
          <h3 className="mb-3 text-[#6C6F70]">Shop</h3>
          <h3 className="mb-3 text-[#6C6F70]">Products</h3>
          <h3 className="mb-3 text-[#6C6F70]">About Us</h3>
          <h3 className="mb-3 text-[#6C6F70]">Blog</h3>
        </div>
        <div className="">
          <h3 className="text-lg font-bold mb-6">Contact</h3>
          <h3 className="text-[#0487E2] font-bold text-sm">Call</h3>
          <h3 className="mb-3 text-[#6C6F70]">+01865525562</h3>
          <h3 className="text-[#0487E2] font-bold text-sm">Email</h3>
          <h3 className="mb-3 text-[#6C6F70]">info@skygears.com</h3>
          <h3 className="text-[#0487E2] font-bold text-sm">Address</h3>
          <h3 className="mb-3 text-[#6C6F70] w-[180px]">
            Street 3-11A, North Road, Dhaka-1200
          </h3>
        </div>

        <div className="">
          <h3 className="text-lg font-bold mb-6">Policy</h3>
          <h3 className="mb-3 text-[#6C6F70]">Terms & Conditions</h3>
          <h3 className="mb-3 text-[#6C6F70]">Information Policy</h3>
          <h3 className="mb-3 text-[#6C6F70]">Refund Policy</h3>
          <h3 className="mb-3 text-[#6C6F70]">Privacy & Policy</h3>
          <h3 className="mb-3 text-[#6C6F70]">Payment</h3>
        </div>

        <div className="">
          <h3 className="text-lg font-bold mb-6">Payment</h3>
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
