"use client"

import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { categories } from '../dummyData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { usePodcasts } from '../utils/podcastQuerry';
import Link from 'next/link';

interface Category { 
  id: number;
  name: string;
  img: string;
}

const Educational = () => {
  const [page, setPage] = useState(1);
  const { data: podcasts, isLoading, error, isFetching } = usePodcasts(page);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className='mt-10'>
      <div className='max-w-[1200px] overflow-hidden mx-auto'>
        <div className='flex items-center  max-sm:text-[16px] justify-between mb-5 max-sm:mx-0 mx-10'>
          <h1 className='text-[#5A5A5A] max-xl:mx-5 font-[700] max-sm:text-[14px] text-[20px] border-l-[3px] border-[#CC0001] pl-1'>Educational</h1>
          <Link href="/categories"><button className='px-4 py-2 max-sm:text-[11px] max-sm:p-2 rounded-[30px] text-[#9747FF] text-[15px] max-xl:mx-5 font-[500] border-[#9747FF] cursor-pointer border-[1px] flex justify-center items-center gap-1'>View all <IoIosArrowForward /></button></Link>
        </div>
        <div className="custom-slider-wrapper items-start max-xl:px-3 gap-5 pb-4">
          <Slider {...settings}>
          {
            podcasts?.data?.map((category) => (
              <div key={category.id} className="snap-start bg-[#F4F4F4] max-sm:w-[180px] p-3 cursor-pointer shrink-0 w-[223px] flex flex-col gap-3">
                <Link className='border-0 outline-0' href={`/categories/${category.id}`}><img className='w-[100%] h-[210px] max-sm:h-[150px] object-cover' src={category.picture_url} alt="" />
                <h1 className='text-[#282828] max-sm:text-[16px] font-[700] my-3 text-[18px]'>{category.title.slice(0, 15)}...</h1></Link>
                <div className='flex items-center gap-2'>
                  <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                  <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
                </div>
              </div>
            ))
          }
          </Slider>
        </div>
      </div>
    </div>
  )
}


export default Educational