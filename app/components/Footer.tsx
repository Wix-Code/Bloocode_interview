"use client"
import React from 'react'
import { Links } from '../dummyData'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Link {
  id: number;
  name: string;
  url: string;
}

const Footer = () => {
  const pathname = usePathname()
  return (
    <div className='bg-[#282828] max-lg:py-10 py-8 max-md:py-10'>
      <div className='max-w-[1200px] mx-auto max-xl:mx-5 flex max-md:gap-10 max-md:mx-5 flex-col gap-5'>
        <Link href="/"><img className='w-[150]' src="/files/footh.png" alt="" /></Link>
        <div className='flex items-center max-md:items-start max-md:gap-8 gap-5 max-md:flex-col'>
          {
            Links.map((link: Link) => (
              <a href={link.url} key={link.id} className={`text-[#C9C9C9] max-lg:text-[13px] text-[16px] font-[700] uppercase hover:text-[#ececec] max-md:border-0 border-r-[1px] pr-4 border-[#C9C9C9] ${pathname === link.url ? 'text-[#ffffff]' : ""}`}>{link.name}</a>
            ))
          }
          <div className='flex items-center max-md:gap-8 max-md:items-start max-md:flex-col gap-2'>
            <p  className='text-[#C9C9C9] max-md:text-[13px] text-[16px] font-[700] uppercase hover:text-[#1DB954]'>CONNECT WITH ABR</p>
            <img src="/files/ic.png" alt="" />
          </div>
        </div>
        <div className='flex items-center max-md:flex-col max-md:gap-5 max-md:items-start gap-8'>
          <p className='text-[14px] max-md:text-[12px] font-normal text-[#FFFFFF]'>© Copyright 2021. All Rights Reserved.</p>
          <p className='text-[14px] max-md:text-[12px] font-normal text-[#FFFFFF]'>Terms & conditions</p>
          <p className='text-[14px] max-md:text-[12px] font-normal text-[#FFFFFF]'>Privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer