"use client"
import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { exploreCategory, podcasts } from '../dummyData';
import { usePodcasts } from '../utils/podcastQuerry';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../utils/store';
import { RiPlayLargeFill, RiPlayReverseLargeFill } from 'react-icons/ri';
import Spinner from '../components/Spinner';

interface Podcasts { 
  id: number;
  name: string;
  img: string;
  desc: string;
  part: string;
}

interface ExploreCategory { 
  id: number;
  name: string;
  img: string;
}
const page = () => {
  const [page, setPage] = useState(1);
  const { data: podcasts, isLoading, error, isFetching } = usePodcasts(page);
  const dispatch = useDispatch<AppDispatch>();

  console.log(podcasts, 'podcast')

  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to load podcasts</p>;

  return (
    <div className='mt-5 mb-32'>
      <div className='flex flex-col gap-4 max-w-[1200px] mx-auto'>
        <h1 className='text-[28px] ml-5 text-[#5A5A5A] font-[800] max-sm:text-[20px]'>ALL PODCASTS</h1>
        <hr className='w-full h-[1px] border-0 bg-[#DCDCDC]' />
        <div className='flex ml-5 gap-5 max-sm:flex-col max-sm:gap-2'>
          <div className='flex items-center gap-2'>
            <p className='text-[#5A5A5A] text-[16px] font-[700]'>Sort by: <span className='text-[#282828]'>Product</span></p>
            <HiDotsHorizontal />
          </div>
          <img className='max-sm:hidden' src="/files/line.png" alt="" />
          <div className='flex items-center gap-2'>
            <p className='text-[#5A5A5A] text-[16px] font-[700]'>Sort by category: <span className='text-[#282828]'>All</span></p>
            <HiDotsHorizontal />
          </div>
        </div>
        <div className='grid mx-5 grid-cols-5 gap-6 max-sm:grid-cols-2 max-sm:gap-2'>
          {
            podcasts?.data?.map((podcast) => (
              <div key={podcast.id} className='flex flex-col max-sm:gap-[2px] gap-1'>
                <img className='w-[100%] h-[180px] object-cover' src={podcast.picture_url} alt="" />
                <h1 className='text-[#282828] mt-3 font-[700] max-sm:text-[16px] text-[18px]'>{podcast.title.slice(0, 15)}...</h1>
                <p className='text-[15px] max-sm:text-[13px] text-justify text-[#282828]'>EPI2: {podcast.description.slice(0, 40)}...</p>
                <p className='text-[#828282] max-sm:text-[11px] text-[13px]'>AUG 29, 2023 <span className='text-[#828282]'>45 MINS</span></p>
                <div className='flex items-center mt-3 gap-2'>
                  <button className='bg-[#d6d6d6] max-sm:w-[20px] max-sm:h-[20px] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/u.png" /></button>
                  <button className='bg-[#d6d6d6] max-sm:w-[20px] max-sm:h-[20px] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                  <button className='bg-[#d6d6d6] max-sm:w-[20px] max-sm:h-[20px] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex gap-2 justify-center mt-6">
        <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`cursor-pointer text-[2C2C2C] ${page === 1 && 'text-[#AEAEAE]'}`}
        >
          <RiPlayReverseLargeFill />
        </button>

        {Array.from({ length: podcasts?.last_page || 1 }, (_, i) => i + 1)
        .filter((pg) => {
          return (
            pg === 1 || // always show first
            pg === podcasts?.last_page || // always show last
            (pg >= page - 2 && pg <= page + 2) // show window around current page
          );
        })
        .map((pg, index, arr) => {
          const prevPage = arr[index - 1];
          const isEllipsisNeeded = prevPage && pg - prevPage > 1;

          return (
            <React.Fragment key={pg}>
              {isEllipsisNeeded && (
                <span className="px-2 text-[16px] text-[#AEAEAE] flex items-center  justify-center select-none"><HiDotsHorizontal /></span>
              )}
              <button
                onClick={() => setPage(pg)}
                className={`px-3 font-[500] text-[13px] w-[30px] cursor-pointer justify-center items-center flex h-[30px] rounded ${
                  pg === page ? 'bg-[#2C2C2C] text-[#FFFFFF]' : 'bg-[#AEAEAE]'
                }`}
              >
                {pg}
              </button>
            </React.Fragment>
          );
        })}
        <button
          disabled={page === podcasts?.last_page}
          onClick={() => setPage((prev) => prev + 1)}
          className={`cursor-pointer text-[2C2C2C] ${page === podcasts?.last_page && 'text-[#AEAEAE]'}`}
        >
          <RiPlayLargeFill />
        </button>
      </div>
        {isFetching && <p className="text-sm text-gray-500 mt-2">Loading page {page}...</p>}
        <hr className='w-full h-[1px] mt-5 border-0 bg-[#DCDCDC]' />
        <div className='mx-5 mt-10 flex flex-col max-sm:gap-2 gap-5'>
          <h1 className='text-[#5A5A5A] max-sm:text-[18px] text-[24px] font-[800]'>Explore other categories</h1>
          <div className='grid grid-cols-4 gap-5 max-sm:gap-2 max-sm:grid-cols-2'>
            {
              exploreCategory.map((category: ExploreCategory) => (
                <div key={category.id} className='flex relative flex-col gap-1 mb-5'>
                  <img className='w-[100%] h-[160px] object-cover' src={category.img} alt="" />
                  <div className='bg-[#000000] absolute w-full bottom-0'>
                    <h1 className='text-[#ffffff] ml-4 mt-3 font-[700] text-[18px] max-sm:text-[14px]'>{category.name}</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page