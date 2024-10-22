import React from "react";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="">
      <h2 className="font-semibold text-2xl text-center mb-14 mt-12">Read Our Blogs</h2>
      <div className="flex flex-col gap-6 mx-12 justify-center lg:flex-row items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-3 mb-5">
        <button className="font-semibold px-6 py-3 bg-[#0487E2] text-white rounded">
          Read More Blogs
        </button>
      </div>
    </div>
  );
}
