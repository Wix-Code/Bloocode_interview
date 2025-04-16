import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { exploreCategory, podcasts } from '../dummyData';

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
            podcasts.map((podcast: Podcasts) => (
              <div key={podcast.id} className='flex flex-col max-sm:gap-[2px] gap-1'>
                <img className='w-[100%] h-[180px] object-cover' src={podcast.img} alt="" />
                <h1 className='text-[#282828] mt-3 font-[700] max-sm:text-[16px] text-[18px]'>{podcast.name}</h1>
                <p className='text-[15px] max-sm:text-[13px] text-[#282828]'>EPI2: {podcast.desc}</p>
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