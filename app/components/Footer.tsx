import React from 'react'
import { Links } from '../dummyData'

interface Link {
  id: number;
  name: string;
  url: string;
}

const Footer = () => {
  return (
    <div className='bg-[#282828] py-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-5'>
        <img className='w-[150]' src="/files/footh.png" alt="" />
        <div className='flex items-center gap-5'>
          {
            Links.map((link: Link) => (
              <a href={link.url} key={link.id} className='text-[#C9C9C9] text-[16px] font-[700] uppercase hover:text-[#ececec] border-r-[1px] pr-4 border-[#C9C9C9]'>{link.name}</a>
            ))
          }
          <div className='flex items-center gap-2'>
            <p  className='text-[#C9C9C9] text-[16px] font-[700] uppercase hover:text-[#1DB954]'>CONNECT WITH ABR</p>
            <img src="/files/ic.png" alt="" />
          </div>
        </div>
        <div className='flex items-center gap-8'>
          <p className='text-[14px] font-normal text-[#FFFFFF]'>© Copyright 2021. All Rights Reserved.</p>
          <p className='text-[14px] font-normal text-[#FFFFFF]'>Terms & conditions</p>
          <p className='text-[14px] font-normal text-[#FFFFFF]'>Privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer