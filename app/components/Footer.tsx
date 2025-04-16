import React from 'react'
import { Links } from '../dummyData'

interface Link {
  id: number;
  name: string;
  url: string;
}

const Footer = () => {
  return (
    <div className='bg-[#282828] py-8 max-sm:py-10'>
      <div className='max-w-[1200px] mx-auto flex max-sm:gap-10 max-sm:mx-5 flex-col gap-5'>
        <img className='w-[150]' src="/files/footh.png" alt="" />
        <div className='flex items-center max-sm:items-start max-sm:gap-8 gap-5 max-sm:flex-col'>
          {
            Links.map((link: Link) => (
              <a href={link.url} key={link.id} className='text-[#C9C9C9] max-sm:text-[14px] text-[16px] font-[700] uppercase hover:text-[#ececec] max-sm:border-0 border-r-[1px] pr-4 border-[#C9C9C9]'>{link.name}</a>
            ))
          }
          <div className='flex items-center max-sm:gap-8 max-sm:items-start max-sm:flex-col gap-2'>
            <p  className='text-[#C9C9C9] max-sm:text-[14px] text-[16px] font-[700] uppercase hover:text-[#1DB954]'>CONNECT WITH ABR</p>
            <img src="/files/ic.png" alt="" />
          </div>
        </div>
        <div className='flex items-center max-sm:flex-col max-sm:gap-5 max-sm:items-start gap-8'>
          <p className='text-[14px] max-sm:text-[12px] font-normal text-[#FFFFFF]'>© Copyright 2021. All Rights Reserved.</p>
          <p className='text-[14px] max-sm:text-[12px] font-normal text-[#FFFFFF]'>Terms & conditions</p>
          <p className='text-[14px] max-sm:text-[12px] font-normal text-[#FFFFFF]'>Privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer