"use client"

import React, { useState } from 'react'
import { Links } from '../dummyData'
import { CiSearch } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import ResponsiveNavbar from './ResponsiveNavbar'

const NavBar = () => {
  const[openNav, setOpenNav] = useState<boolean>(false)
  return (
    <div className='bg-[#FFFFFF] sticky z-50 top-0'>
      <div className='max-w-[1200px] max-lg:relative mx-auto flex items-center h-[80px] justify-between py-5'>
        <img className='w-[150px] max-md:w-[90px] object-cover ml-5' src="/files/afr.png" alt="" />
        <div className='flex items-center mr-5 max-lg:hidden gap-4'>
          {
            Links.map((link) => (
              <a href={link.url} key={link.id} className='text-[#282828] text-[15px] font-[700] capitalize hover:text-[#636363] pr-4'>{link.name}</a>
            ))
          }
          <div className='flex items-center gap-2 ml-5 bg-[#00000052] text-[#FFFFFF] rounded-[28px] px-4 text-[13px] py-3'>
            <CiSearch className='text-[20px]' />
            <input className='outline-hidden' type="text" placeholder='Search' name="" id="" />
          </div>
        </div>
        <div className='hidden max-lg:flex'>
          {openNav && (<ResponsiveNavbar setOpenNav={setOpenNav} />)}
        </div>
        <button onClick={() => setOpenNav(!openNav)} className='max-lg:flex text-[18px] hidden mr-5'><FaBars /></button>
      </div>
      <div className='py-2 flex w-[100%] max-lg:hidden items-center'>
        <img className='w-[40%] max-xl:w-[25%] object-cover h-[60px]' src="/files/ba.png" alt="" />
        <div className='flex w-[60%] max-xl:w-[75%] bg-[#1B1B1B] gap-8 max-xl:text-[13px] justify-center pr-5 items-center h-[60px]'>
          <div className='flex text-[#FFFFFF] bg-[#1B1B1B] items-center gap-2'>
            <img src="/files/la.png" alt="" />
            <p className='text-[15px] font-[700]'>Latest News</p>
          </div>
          <div className='flex text-[#FFFFFF] bg-[#1B1B1B] items-center gap-2'>
            <img src="/files/la3.png" alt="" />
            <p className='text-[15px] font-[700]'>New Episodes</p>
          </div>
          <div className='flex text-[#FFFFFF] bg-[#1B1B1B] items-center gap-2'>
            <img src="/files/la2.png" alt="" />
            <p className='text-[15px] font-[700]'>Our Services</p>
          </div>
          <div className='flex text-[#FFFFFF] bg-[#1B1B1B] items-center gap-2'>
            <img src="/files/la1.png" alt="" />
            <p className='text-[15px] font-[700]'>All Podcasts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar