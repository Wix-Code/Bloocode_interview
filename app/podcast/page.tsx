"use client"

import React, { useState } from 'react'
import { podcasts } from '../dummyData'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../utils/store';
import { usePodcastData } from '../utils/podcastQuerry';

interface Podcasts { 
  id: number;
  name: string;
  img: string;
  desc: string;
  part: string;
}
const page = () => {
  const { data: podcasts, isLoading, error } = usePodcastData();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 8;

  const totalPages = Math.ceil((podcasts?.length || 0)  / podcastsPerPage);
  const startIndex = (currentPage - 1) * podcastsPerPage;
  const currentPodcasts = podcasts?.slice(startIndex, startIndex + podcastsPerPage);

  if (isLoading) return <p>Loading podcasts...</p>;
  if (error) return <p>Failed to load podcasts</p>;
  if (!Array.isArray(podcasts)) return <p>No podcasts available.</p>;
  return (
    <div>
      <div className='bg-[#2B3221] max-sm:flex-col mb-10 relative p-10 flex items-center gap-7'>
        <div>
          <img className='h-[350px] object-cover w-[390px]' src="/files/epi.png" alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] text-[#BFBFBF] font-[800]'>PODCAST</p>
          <p className='text-[28px] text-[#FFFFFF] font-[800]'>Hope For the Widow</p>
          <p className='text-[15px] text-justify text-[#FFFFFF] font-[500]'>The show aims to shed light on the challenges faced by less privileged <br /> widows, providing support and a platform to promote a better life. Join <br /> us in making a difference. #EmpoweringWidows #SupportingWidows.</p>
          <img className='w-[210px]' src="/files/to.png" alt="" />
        </div>
        <div className='absolute right-8 top-8'>
          <img className='' src="/files/shr.png" alt="" />
        </div>
      </div>
      <div className='flex max-w-[1200px] justify-between mb-10 m-auto max-sm:flex-col'>
        <div className='flex w-[70%] max-sm:w-full flex-col'>
          <p className='text-[#5A5A5A] p-4 text-[18px] font-[800]'>ALL EPISODES  <span className='font-[500]'>({podcasts?.length} Available)</span></p>
          <hr className='w-full bg-[#DCDCDC] h-[1px] border-0' />
          <div className='max-sm-w-full'>
            {
              currentPodcasts?.map((category) => (
                <div key={category.id} className='flex p-5 max-sm:w-full border-b-[1px] border-[#DCDCDC] flex-row max-sm:flex-col gap-4'>
                  <img className='w-[157px] max-sm:h-[250px] h-[129px] max-sm:w-full object-cover' src={category.picture_url} alt="" />
                  <div className='max-sm:w-full'>
                    <p className='text-[#828282] text-[13px] font-[700]'>AUG 29, 2023 <span className='text-[#828282]'>45 MINS</span></p>
                    <p className='text-[#282828] text-[20px] font-[700]'>{category.title}</p>
                    <p className='text-[#282828] text-[15px] font-[500]'>{category.description.slice(0, 350)}...</p>
                    <div className='flex items-center mt-3 gap-4'>
                      <button className='bg-[#d6d6d6] cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/u.png" /></button>
                      <button className='bg-[#d6d6d6] cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/b.png" /></button>
                      <button className='bg-[#d6d6d6] cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                      <button className='bg-[#d6d6d6] cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 cursor-pointer rounded ${
                  page === currentPage
                    ? 'bg-[#2C2C2C] text-white'
                    : 'bg-[#AEAEAE] text-[#FFFFFF]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
        <div className='w-[20%] max-sm:mt-10 max-sm:w-full'>
          <div className='flex flex-col max-md:mx-10'>
            <p className='text-[11px] text-right text-[#5A5A5A] font-[500]'>ADVERTISEMENT</p>
            <img className='w-[100%] object-cover h-[100%]' src="/files/adv.png" alt="" />
            <img className='w-[100%] object-center mt-5 h-[100%]' src="/files/av.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page