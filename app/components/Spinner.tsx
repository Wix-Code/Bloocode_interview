import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] py-10">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#b99d75] rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner