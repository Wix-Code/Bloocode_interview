"use client"

import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { categories } from '../dummyData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

interface Category { 
  id: number;
  name: string;
  img: string;
}

const OtherPodcasts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div className='mt-10'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center justify-between mb-5 mx-10'>
          <h1 className='text-[#5A5A5A] max-sm:text-[16px] font-[700] text-[20px] border-l-[3px] border-[#CC0001] pl-1'>Other Podcasts</h1>
          <button className='px-4 py-2 rounded-[22px] text-[#9747FF] text-[15px] font-[500] border-[#9747FF] cursor-pointer border-[1px] max-sm:text-[13px] flex justify-center items-center gap-1'>View all <IoIosArrowForward /></button>
        </div>
        <div className="flex items-start gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar ">
          {
            categories.map((category: Category) => (
              <div key={category.id} className="snap-start bg-[#F4F4F4] p-3 cursor-pointer shrink-0 w-[223px] flex flex-col gap-3">
                <img className='w-[210px] h-[210px] object-cover' src={category.img} alt="" />
                <h1 className='text-[#282828] font-[700] text-[18px]'>{category.name}</h1>
                <div className='flex items-center gap-2'>
                  <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                  <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OtherPodcasts