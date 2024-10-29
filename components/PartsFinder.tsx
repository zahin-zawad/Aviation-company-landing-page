import { Button } from "antd";
import React from "react";

export default function PartsFinder() {
  return (
    <div className="bg-[#2637460D] px-6 py-12 lg:mx-16 mx-4 my-6 rounded-md">
      <h2 className="text-center text-2xl">Parts Finder</h2>
      <div className="lg:flex justify-center mt-6 lg:gap-3 text-base items-center">
        <div className="flex justify-center">
          <label htmlFor="partName">I’m Looking for </label>
        </div>
        <select
          name=""
          id="partName"
          className="bg-white py-4 px-6 border rounded w-full lg:w-52 mb-3"
        >
          <option value="Part Name" className="w-52 py-2">
            Part Name
          </option>
          <option value="Part Name" className="w-52 py-2">
            Part Name
          </option>
          <option value="Part Name" className="w-52 py-2">
            Part Name
          </option>
        </select>
        <div className="flex justify-center mb-3">
          <label htmlFor="Make">for a </label>
        </div>
        <select
          name=""
          id="Make"
          className="bg-white py-4 px-6 border rounded w-full lg:w-52 mb-3"
        >
          <option value="Make">Make</option>
          <option value="Make">Make</option>
          <option value="Make">Make</option>
        </select>
        <select
          name=""
          id="Model"
          className="bg-white py-4 px-6 border rounded w-full lg:w-52 mb-3 lg:mb-0"
        >
          <option value="Model">Model</option>
          <option value="Model">Model</option>
          <option value="Model">Model</option>
        </select>


        <button className="bg-[#0487E2] text-white px-6 py-4 rounded w-full lg:w-52 hover:bg-[#169dfd]">
          Find Parts
        </button>
      </div>
    </div>
  );
}
