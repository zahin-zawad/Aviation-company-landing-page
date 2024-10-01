import React from 'react'

export default function PartsFinder() {
  return (
    <div className='bg-[#2637460D] px-6 py-12 mx-[72px] my-6'>
        <h2 className='text-center text-2xl'>Parts Finder</h2>
        <div className='flex justify-center mt-6'>
            <label htmlFor="partName">I’m Looking for </label>
            <select name="" id="partName">
                <option value="Part Name" className='w-52 py-2'>Part Name</option>
            </select>
            <label htmlFor="Make">for a </label>
            <select name="" id="Make">
                <option value="Make">Make</option>
            </select>
            <select name="" id="Model">
                <option value="Model">Model</option>
            </select>
        </div>
    </div>
  )
}
