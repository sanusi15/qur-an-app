import React from 'react'
import { BiSolidHomeCircle, BiMoviePlay  } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";

const BottomBar = () => {
  return (
    <div className='px-10 grid fixed bottom-0 items-center w-full h-14 bg-secondary border-t-2 border-slate-200 md:max-w-screen-md md:m-auto'>
        <div className='flex justify-between'>
            <BiSolidHomeCircle className='text-primary text-xl' />
            <BiMoviePlay className='text-slate-700 text-xl' />
            <BsFileEarmarkText className='text-slate-700 text-xl' />
            <HiOutlineUser className='text-slate-700 text-xl' />
        </div>
    </div>
  )
}

export default BottomBar