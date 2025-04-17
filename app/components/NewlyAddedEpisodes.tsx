import React, { useRef, useState } from 'react'
import { usePodcasts } from '../utils/podcastQuerry'
import { RiPlayLargeFill, RiPlayReverseLargeFill } from 'react-icons/ri'

const NewlyAddedEpisodes = () => {
  const [page, setPage] = useState(1)
  const { data: podcasts, isLoading, error, isFetching } = usePodcasts(page)

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

  /*<div className='absolute'>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-700 rounded-full shadow-md p-2 hidden md:flex"
          >
            <IoIosArrowBack />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-700 rounded-full shadow-md p-2 hidden md:flex"
          >
            <IoIosArrowForward />
          </button>
          </div>*/

  return (
    <div className="relative">
      <div className="max-w-[1200px] max-xl:mx-5 mx-auto overflow-hidden">
        <p className="text-[24px] max-sm:text-[15px] mt-5 text-[#282828] font-[700]">
          Newly added episodes
        </p>

        <div className="relative max-xl:w-full">
          {/* Scroll Buttons */}
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

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex items-start mt-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 hide-scrollbar"
          >
            {podcasts?.data?.map((podcast) => (
              <div
                key={podcast.id}
                className="snap-start max-sm:w-[180px] max-sm:gap-1 cursor-pointer shrink-0 w-[223px] flex flex-col gap-3">
                <img
                  className="w-[100%] object-cover max-sm:h-[150px] h-[187px]"
                  src={podcast.picture_url}
                  alt=""
                />
                <p className="text-[13px] max-sm:text-[12px] font-[700] text-[#828282]">
                  AUG 29, 2023
                </p>
                <p className="text-[#282828] font-[700] max-sm:text-[14px] text-[16px]">
                  {podcast.description.slice(0, 30)}...
                </p>
                <div className="flex items-center gap-7">
                  <p className="text-[13px] max-sm:text-[11px] font-[500] text-[#828282]">
                    More Episodes
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="bg-[#d6d6d6] w-[30px] h-[30px] max-sm:w-[22px] max-sm:h-[22px] rounded-[50%] flex justify-center items-center">
                      <img src="/files/share.png" />
                    </button>
                    <button className="bg-[#d6d6d6] w-[30px] max-sm:w-[22px] max-sm:h-[22px] h-[30px] rounded-[50%] flex justify-center items-center">
                      <img src="/files/gr.png" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewlyAddedEpisodes
