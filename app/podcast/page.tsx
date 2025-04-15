import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-[#2B3221] mb-14 relative p-10 flex items-center gap-7'>
        <div>
          <img className='h-[350px] object-cover w-[390px]' src="/files/epi.png" alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] text-[#BFBFBF] font-[800]'>PODCAST</p>
          <p className='text-[28px] text-[#FFFFFF] font-[800]'>Hope For the Widow</p>
          <p className='text-[15px] text-justify text-[#FFFFFF] font-[500]'>The show aims to shed light on the challenges faced by less privileged <br /> widows, providing support and a platform to promote a better life. Join <br /> us in making a difference. #EmpoweringWidows #SupportingWidows.</p>
          <img className='w-[210px]' src="/files/to.png" alt="" />
        </div>
        <div className='absolute right-8 top-8'>
          <img className='' src="/files/shr.png" alt="" />
        </div>
      </div>
      <div className='flex max-w-[1200px] justify-between mb-10 m-auto'>
        <div className='flex w-[70%] flex-col gap-3'>
          <p className='text-[#5A5A5A] text-[18px] font-[800]'>ALL EPISODES  <span className='font-[500]'>(3 AVAILABLE)</span></p>
          <hr className='w-full bg-[#DCDCDC] h-[1px] border-0' />
          <img className='w-[210px]' src="/files/adv.png" alt="" />
        </div>
        <div className='flex flex-col w-[20%]'>
          <p className='text-[11px] text-right text-[#5A5A5A] font-[500]'>ADVERTISEMENT</p>
          <img className='w-[100%] object-cover h-[100%]' src="/files/adv.png" alt="" />
          <img className='w-[100%] object-center mt-5 h-[100%]' src="/files/av.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default page