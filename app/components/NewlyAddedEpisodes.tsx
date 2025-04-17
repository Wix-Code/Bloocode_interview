import React, { useState } from 'react'
import { podcasts } from '../dummyData'
import { usePodcasts } from '../utils/podcastQuerry';

const NewlyAddedEpisodes = () => {
  const [page, setPage] = useState(1);
  const { data: podcasts, isLoading, error, isFetching } = usePodcasts(page);
  return (
    <div>
      <div className='max-w-[1200px] max-xl:mx-5 mx-auto overflow-hidden'>
        <p className='text-[24px] max-sm:text-[15px] mt-5 text-[#282828] font-[700]'>Newly added episodes</p>
        <div className="flex items-start mt-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar">
          {
            podcasts?.data?.map((podcast) => {
              return (
                <div key={podcast.id} className="snap-start max-sm:w-[180px] max-sm:gap-1 cursor-pointer shrink-0 w-[223px] flex flex-col gap-3">
                  <img className='w-[100%] object-cover max-sm:h-[150px] h-[187px]' src={podcast.picture_url} alt="" />
                  <p className='text-[13px] max-sm:text-[12px] font-[700] text-[#828282]'>AUG 29, 2023</p>
                  <p className='text-[#282828] font-[700] max-sm:text-[14px] text-[16px]'>{podcast.description.slice(0, 30)}...</p>
                  <div className='flex items-center gap-7'>
                    <p className='text-[13px] max-sm:text-[11px] font-[500] text-[#828282]'>More Episodes</p>
                    <div className='flex items-center gap-2'>
                      <button className='bg-[#d6d6d6] w-[30px] h-[30px] max-sm:w-[22px] max-sm:h-[22px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                      <button className='bg-[#d6d6d6] w-[30px] max-sm:w-[22px] max-sm:h-[22px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
                    </div>
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

export default NewlyAddedEpisodes