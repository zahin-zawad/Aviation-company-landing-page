import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full h-80 bg-[#0363CA] px-5'>
        <div className='flex justify-center pt-16'>
         <h2 className='text-white text-2xl font-bold '>Subscribe to our Newsletter</h2>
        </div>
        <h2 className='text-white text-center mt-3'>Subscribe to our newsletter to get up to date offers, news and many more!</h2>
        <div className='flex justify-center mt-12'>
        <input type="text" placeholder='Enter your email address' className='pl-6 w-96 h-auto rounded-sm py-3' />
        </div>
    </div>
  )
}
