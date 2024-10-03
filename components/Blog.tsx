import React from "react";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="h-[581px]">
      <h2 className="font-semibold text-2xl text-center mb-[60px] mt-12">Read Our Blogs</h2>
      <div className="flex gap-6 justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-12">
        <button className="font-semibold px-6 py-3 bg-[#0487E2] text-white rounded">
          Read More Blogs
        </button>
      </div>
    </div>
  );
}
