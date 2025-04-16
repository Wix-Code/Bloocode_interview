import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#F6E8E8] py-10 mt-10 z-10'>
      <div className='max-w-[1100px] mx-auto flex justify-between max-sm:gap-3 max-sm:mx-5 max-sm:flex-col items-center'>
        <div className='flex flex-col gap-3 flex-1'>
          <h1 className='text-[32px] font-[800] text-[#282828]'>Never stop listening!</h1>
          <p className='text-[#282828] text-[24px] font-[500] leading-7'>Every episodes is a journey <br /> you don’t wanna miss out on. </p>
          <p className='text-[16px] mt-5 font-[500] text-[#282828]'>Get the latest headlines and unique ABR stories, sent every weekday.</p>
          <div className='flex w-[100%] bg-[#FFFFFF] h-[49px] gap-[2px] items-center'>
            <input className='bg-[#D9D9D9] rounded-[3px] px-3 h-[100%] outline-hidden w-[75%] text-[#5A5A5A] text-[14px] font-[500]' type="text" placeholder='Enter your email' name="" id="" />
            <button className='bg-[#CC0001] rounded-[3px] cursor-pointer h-[100%] w-[25%] text-[#FFFFFF] text-[16px] font-[700]'>Get me in</button>
          </div>
        </div>
        <div className='relative z-10 flex-1 flex justify-end items-center'>
          <div className='relative flex-1 flex justify-end items-center'>
            <img className='w-[300px]' src="/files/ban.png" alt="" />
            <img className='absolute w-[150px] max-sm:left-0 top-[160px] left-[180px]' src="/files/ban1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner