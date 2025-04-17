import React from 'react'

const EditorsPick = () => {
  return (
    <div className='bg-[#F6F6F6] pb-5 mt-8'>
      <div className='max-w-[1200px] max-sm:mx-5 mx-auto flex flex-col gap-2'>
        <p className='text-[24px] max-sm:text-[15px] mb-2 mt-5 text-[#282828] font-[700]'>EDITOR’S PICKS</p>
        <h1 className='text-[#5A5A5A] font-[700] max-sm:text-[14px] text-[20px] border-l-[3px] border-[#CC0001] pl-1'>Featured Episodes</h1>
        <div className='flex h-[550px] max-sm:h-[100%] max-sm:flex-col items-center gap-8 mt-5'>
          <div className='w-[50%] max-sm:w-[100%] relative h-full'>
            <img className='w-full object-cover h-full' src="/files/adv.png" alt="" />
            <div className='absolute flex gap-4 px-5 py-2 bottom-0 items-center bg-[#000000c9]'>
              <img className='w-[46px] cursor-pointer object-cover rounded-full h-[46px]' src="/files/u.png" alt="" />
              <p className='text-[24px] max-sm:text-[16px] text-[#FFFFFF] cursor-pointer font-[800]'>Bridging the Financing Gap in Nigeria’s off-grid sector</p>
            </div>
          </div>
          <div className='h-full flex flex-col gap-1 max-sm:w-[100%] w-[50%]'>
            <div className='flex max-sm:gap-5 gap-9 max-sm:h-[300px] h-[450px]'>
              <div className='bg-[#FFFFFF] w-full flex flex-col gap-4'>
                <img className='object-cover max-sm:h-[150px] h-[250px] w-full' src="/files/epi.png" alt="" />
                <div className='flex items-center relative gap-1  mx-10'>
                  <div>
                    <img className='absolute w-[40px] h-[40px] rounded-[50%] object-cover left-[-59px] top-0' src="/files/u.png" alt="" />
                  </div>
                  <h1 className='text-[18px] max-sm:text-[14px] font-[600] text-[#282828]'>The Future of Work: Embracing Remote and Hybrid Workforces</h1>
                </div>
                <p className='text-[13px] ml-11 font-normal text-left mb-5 text-[#282828]'>Aug 7, 2025</p>
              </div>
              <div className='bg-[#FFFFFF] pr-5 w-[100%] flex flex-col gap-4'>
                <img className='object-cover max-sm:h-[150px] h-[250px] w-full' src="/files/ad.png" alt="" />
                <div className='flex items-center relative gap-1  mx-10'>
                  <div>
                    <img className='absolute w-[40px] h-[40px] rounded-[50%] object-cover left-[-59px] top-0' src="/files/u.png" alt="" />
                  </div>
                  <h1 className='text-[18px] font-[600] max-sm:text-[14px] text-[#282828]'>Compatibility in Relationship</h1>
                </div>
                <p className='text-[13px] ml-11 font-normal text-left mb-5 text-[#282828]'>Aug 7, 2025</p>
              </div>
            </div>
            <img className='w-full object-cover' src="/files/bn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorsPick