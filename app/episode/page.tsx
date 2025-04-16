"use client"
import React from 'react'
import Banner from '../components/Banner'
import { podcasts } from '../dummyData'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useSinglePodcast } from '../utils/podcastQuerry'

const page = () => {
  const params = useParams();
  const id = params?.id;

  const podcastId = typeof id === 'string' ? id : '';

  const { data: podcast, isLoading, isError } = useSinglePodcast(podcastId);

  //if (!podcastId) return <p>Loading...</p>;
  if (isLoading) return <p>Loading podcast...</p>;
  if (isError) return <p>Something went wrong</p>;
  console.log(podcast, 'podcast single')

  return (
    <div className='mb-20'>
      <div className='bg-[#2B3221] py-10'>
        <div className='max-w-[1200px] max-sm:mx-5 mx-auto max-sm:pr-0 pr-14 flex flex-col gap-4'>
          <Link href="/podcast"><p className='text-[13px] flex items-center gap-1 text-[#FFFFFF] font-[600]'><IoIosArrowBack /> Back to podcast</p></Link>
          <div className='flex gap-5 max-sm:flex-col'>
            <img className='w-[157px] max-sm:h-[320px] max-sm:w-full object-cover h-[129px]' src="/files/epi.png" alt="" />
            <div className='flex w-full flex-col pr-5 gap-4'>
              <p className='text-[#FFFFFF] text-[20px] font-[700]'>The Funeral Experience – the Good, the Bad, and the Ugly</p>
              <p className='text-[#FFFFFF] text-justify text-[15px] font-[500]'>The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.Most people in Africa, argue that those rituals are intended to protect widows and not to harm them. This doesn’t appear to be the case as some of these practices and beliefs tend to dehumanise the very essence of their womanhood.In this episode, we will talk about these rites and possible solutions to the bad sides and even how to manage the ugly sides.The guest on this episode is Ms Grace Udodong. <span className='text-[#BCFFB6] text-[15px] font-[700]'>READ MORE </span></p>
              <audio className='w-full mt-6' autoPlay controls>
                <source src="https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/41885154/https_d3ctxlq1ktw2nl_cloudfront_net_staging_2020_02_16_150e8d39c1b7e09317d2a227513505f6.mp3" />
              </audio>
              <div className='flex w-full justify-space-between my-6 items-center'>
                <div className='flex w-full items-center gap-3'>
                  <img src="/files/d.png" alt="" />
                  <img className='w-[40px] object-cover rounded-[50%] h-[40px]' src="/files/u.png" alt="" />
                  <img src="/files/r.png" alt="" />
                </div>
                <div className='flex w-full items-end justify-end gap-3'>
                  <img src="/files/h.png" alt="" />
                  <img src="/files/f.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto mt-5 flex flex-col gap-4'>
        <h1 className='text-[14px] max-sm:px-5 mx-5 font-[800] text-[#282828]'>NEXT EPISODES IN QUEUE</h1>
        <hr className='border-0 w-full h-[1px] bg-[#DCDCDC]' />
        <div className='flex max-sm:px-5 max-sm:mx-5 items-center gap-8 max-sm:flex-col mx-5 mb-10'>
          {
            podcasts.slice(0, 3).map((podcast) => (
              <div key={podcast.id} className='flex w-[300px] max-sm:mx-5 max-sm:w-full flex-col gap-4' style={{boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 5px"}}>
                <img className='w-[100%] h-[288px] object-cover max-sm:h-[280px]' src={podcast.img} alt="" />
                <div className='flex items-center relative gap-1  mx-10'>
                  <div>
                    <img className='absolute w-[40px] h-[40px] rounded-[50%] object-cover left-[-59px] top-0' src="/files/u.png" alt="" />
                  </div>
                  <h1 className='text-[18px] font-[600] text-[#282828]'>{podcast.desc}</h1>
                </div>
                <p className='text-[13px] ml-11 font-normal text-left mb-5 text-[#282828]'>Aug 7, 2023</p>
              </div>
            ))
          }
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default page