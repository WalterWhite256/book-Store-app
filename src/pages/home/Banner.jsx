import React from 'react'
import bannerImg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse gap-12 py-16 justify-between items-center md:mx-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" className='size-3/5' />
      </div>
        {/* left side */}
      <div className='md:w-1/2 w-full '>
        <h1 className='text-3xl md:text-5xl font-medium mb-7 font-serif'>New Release This Week</h1>
        <span className='mb-10 block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea magni reprehenderit animi? Corporis deleniti obcaecati dolore blanditiis eius minus, assumenda dolor ullam ipsa perspiciatis perferendis natus culpa, fugiat, dolorum nisi esse!
        </span>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
      </div>
      {/* right side */}
      
    </div>
  )
}

export default Banner
