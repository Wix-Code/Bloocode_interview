import React from 'react'
import { podcasts } from '../dummyData'

const TrendingThisWeek = () => {
  return (
    <div>
      <div className='max-w-[1200px] max-sm:mx-5 mx-auto mt-5'>
        <p className='text-[24px] max-sm:text-[15px] mb-3 mt-5 text-[#282828] font-[700]'>Trending this week</p>
        <h1 className='text-[#5A5A5A] font-[700] max-sm:text-[14px] text-[20px] border-l-[3px] border-[#CC0001] pl-1'>Educational</h1>
        <div  className="flex items-start mt-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar">
          {
            podcasts.map((podcast) => { 
              return (
                <div key={podcast.id} className="snap-start relative max-sm:w-[180px] max-sm:gap-1 cursor-pointer shrink-0 w-[280px] flex flex-col gap-3">
                  <img className='w-[100%] object-cover max-sm:h-[300px] h-[400px]' src={podcast.img} alt="" />
                  <div className='flex flex-col gap-1 absolute justify-center items-center py-3 bottom-0 left-0 w-[100%] bg-[#000000d7]'>
                    <p className='text-[#FFFFFF] max-sm:text-[11px] text-[13px] font-[700]'>12 Episodes</p>
                    <p className='text-[20px] text-center max-sm:text-[14px] font-[700] text-[#ffffff]'>More Episodes</p>
                  </div>
                </div>
              )
             })
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingThisWeek