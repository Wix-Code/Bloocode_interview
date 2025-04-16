import React from 'react'
import { podcasts } from '../dummyData'

const NewlyAddedEpisodes = () => {
  return (
    <div>
      <div className='max-w-[1200px] max-sm:mx-5 mx-auto overflow-hidden'>
        <p className='text-[24px] text-[#282828] font-[700]'>Newly added episodes</p>
        <div className="flex items-start gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar">
          {
            podcasts.map((podcast) => {
              return (
                <div key={podcast.id} className="snap-start max-sm:w-[180px] max-sm:gap-2 cursor-pointer shrink-0 w-[223px] flex flex-col gap-3">
                  <img className='w-[100%] object-cover max-sm:h-[150px] h-[187px]' src={podcast.img} alt="" />
                  <p className='text-[13px] font-[700] text-[#828282]'>AUG 29, 2023</p>
                  <p className='text-[#282828] font-[700] max-sm:text-[14px] text-[16px]'>{podcast.desc}</p>
                  <div className='flex items-center gap-7'>
                    <p className='text-[13px] font-[500] text-[#828282]'>More Episodes</p>
                    <div className='flex items-center gap-2'>
                      <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/share.png" /></button>
                      <button className='bg-[#d6d6d6] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'><img src="/files/gr.png" /></button>
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