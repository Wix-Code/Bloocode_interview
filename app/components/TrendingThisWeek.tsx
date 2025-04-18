import React, { useRef, useState } from 'react'
import { podcasts } from '../dummyData'
import { usePodcasts } from '../utils/podcastQuerry';
import { RiPlayLargeFill, RiPlayReverseLargeFill } from 'react-icons/ri';

const TrendingThisWeek = () => {
  const [page, setPage] = useState(1);
  const { data: podcasts, isLoading, error, isFetching } = usePodcasts(page);
  const scrollRef = useRef<HTMLDivElement>(null)
  
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      }
    }
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }
  
  return (
    <div className=''>
      <div className='max-w-[1200px] max-xl:mx-5 mx-auto mt-5'>
        <p className='text-[24px] max-sm:text-[15px] mb-3 mt-5 text-[#282828] font-[700]'>Trending this week</p>
        <h1 className='text-[#5A5A5A] font-[700] max-sm:text-[14px] text-[20px] border-l-[3px] border-[#CC0001] pl-1'>Educational</h1>
        <div className='relative max-xl:w-full'>
          <div className='absolute  z-10 max-xl:left-0 right-0 top-0 bottom-0 m-auto left-0 flex justify-end items-center'>
            <div className='bg-[#F9F9F9] p-2 shadow-sm rounded-[12px] gap-2 flex items-center justify-center'>
              <button
                onClick={scrollLeft}
                className="text-[22px] cursor-pointer text-[#5A5A5A]"
              >
                <RiPlayReverseLargeFill />
              </button>

              <button
                onClick={scrollRight}
                className="text-[22px] cursor-pointer text-[#5A5A5A]"
              >
                <RiPlayLargeFill />
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="flex items-start mt-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar">
            {
              podcasts?.data?.map((podcast) => { 
                return (
                  <div key={podcast.id} className="snap-start relative max-sm:w-[180px] max-sm:gap-1 cursor-pointer shrink-0 w-[280px] flex flex-col gap-3">
                    <img className='w-[100%] object-cover max-sm:h-[300px] h-[400px]' src={podcast.picture_url} alt="" />
                    <div className='flex flex-col gap-1 absolute px-4 py-3 bottom-0 left-0 w-[100%] bg-[#000000d7]'>
                      <p className='text-[#FFFFFF] max-sm:text-[11px] text-[13px] font-[700]'>12 Episodes</p>
                      <p className='text-[20px] max-sm:text-[14px] font-[700] text-[#ffffff]'>{podcast.title.slice(0, 20)}...</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingThisWeek