import Image from "next/image";
import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full h-80 bg-[#0363CA] px-5">
      <div className="flex justify-center pt-16">
        <h2 className="text-white text-2xl font-bold ">
          Subscribe to our Newsletter
        </h2>
      </div>
      <h2 className="text-white text-center mt-3">
        Subscribe to our newsletter to get up to date offers, news and many
        more!
      </h2>
      <div className="flex justify-center">
      <div className="flex justify-center mt-12 relative w-96 h-auto">
        <input
          type="text"
          placeholder="Enter your email address"
          className="pl-6 w-96 h-auto rounded-sm py-3"
        />
        <button className="bg-[#0487E2] absolute right-0 p-3 rounded-r-sm text-white">
          Subscribe
        </button>
      </div>
      </div>
    </div>
  );
}
