import React from 'react'

export default function PartsFinder() {
  return (
    <div className='bg-[#2637460D] px-6 py-12 mx-16 my-6 rounded-md'>
        <h2 className='text-center text-2xl'>Parts Finder</h2>
        <div className='flex justify-center mt-6 gap-3 text-base items-center'>
            <label htmlFor="partName">I’m Looking for </label>
            <select name="" id="partName" className='bg-white py-4 px-6 border rounded'>
                <option value="Part Name" className='w-52 py-2'>Part Name</option>
                <option value="Part Name" className='w-52 py-2'>Part Name</option>
                <option value="Part Name" className='w-52 py-2'>Part Name</option>
            </select>
            <label htmlFor="Make">for a </label>
            <select name="" id="Make" className='bg-white py-4 px-6 border rounded'>
                <option value="Make">Make</option>
                <option value="Make">Make</option>
                <option value="Make">Make</option>
            </select>
            <select name="" id="Model" className='bg-white py-4 px-6 border rounded'>
                <option value="Model">Model</option>
                <option value="Model">Model</option>
                <option value="Model">Model</option>
            </select>

            <button className='bg-[#0487E2] text-white px-6 py-4 rounded'>Find Parts</button>
        </div>
    </div>
  )
}
