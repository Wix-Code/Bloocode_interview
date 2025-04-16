import React from 'react'
import { Links } from '../dummyData'
interface NavbarProps {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResponsiveNavbar: React.FC<NavbarProps> = ({setOpenNav}) => {
  return (
    <div className='absolute top-0 left-0 w-[70%] h-screen py-4 bg-[#282828] z-50'>
      <div className='flex flex-col'>
        <img src="/files/afr.png"  className='w-[100px] mt-5 mx-5' alt="Logo" />
        {
          Links.map((link) => {
            return (
              <div className='flex mt-4 flex-col gap-5'>
                <a href={link.url} onClick={() => setOpenNav(false)} key={link.id} className='text-[#ffffff] text-[15px] font-[700] px-5 border-b-[1px] pb-3 border-[#636363] capitalize hover:text-[#636363]'>{link.name}</a>
              </div>
            )
          })
        }
        <div className='flex flex-col mt-5 gap-5'>
          <p className='text-[#ffffff] text-[15px] font-[700] px-5  capitalize hover:text-[#636363]'>Latest News</p>
          <p className='text-[#ffffff] text-[15px] font-[700] px-5  capitalize hover:text-[#636363]'>New Episodes</p>
          <p className='text-[#ffffff] text-[15px] font-[700] px-5  capitalize hover:text-[#636363]'>Our Services</p>
          <p className='text-[#ffffff] text-[15px] font-[700] px-5  capitalize hover:text-[#636363]'>All Podcasts</p>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNavbar