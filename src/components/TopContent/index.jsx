import React from 'react'
import { BsSunriseFill, BsFillSunFill, BsFillMoonStarsFill  } from "react-icons/bs";
import { RiSunFoggyFill } from "react-icons/ri";
import { TbSunset2 } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";

const TopContent = () => {
  return (
    <div className="px-4 py-4 bg-primary bg-mosque bg-contain bg-no-repeat bg-bottom bg-blend-soft-light ">
        <div className='flex mb-14 justify-between items-center'>
            <div>
            <p className='text-secondary'>10 Ramadhan 1445 H</p>
            <p className='text-secondary text-xs'>Jakarta, Indonesia</p>
            </div>
            <IoNotifications className='text-secondary text-lg'/>
        </div>
        <div className='grid justify-center'>
            <p className='text-center text-secondary text-4xl font-bold'>04:41</p>
            <p className='text-center text-secondary text-sm'>Fajr 3 hour 9 min left</p>
        </div>
        <div className="flex justify-between gap-2 mt-10">
            <div className='text-secondary grid gap-2'>
                <p className='text-center text-xs'>Fajr</p>
                <p className='text-center ml-3 text-md'>
                    <BsSunriseFill />
                </p>
                <p className='text-center text-xs'>04:41</p>
            </div>
            <div className='text-secondary grid gap-2'>
                <p className='text-center text-xs'>Dzuhur</p>
                <p className='text-center ml-3 text-md'>
                    <BsFillSunFill />
                </p>
                <p className='text-center text-xs'>12:00</p>
            </div>
            <div className='text-secondary grid gap-2'>
                <p className='text-center text-xs'>Ashr</p>
                <p className='text-center ml-3 text-md'>
                    <RiSunFoggyFill />
                </p>
                <p className='text-center text-xs'>15:14</p>
            </div>
            <div className='text-secondary grid gap-2'>
                <p className='text-center text-xs'>Maghrib</p>
                <p className='text-center ml-3 text-md'>
                    <TbSunset2 />
                </p>
                <p className='text-center text-xs'>18:02</p>
            </div>
            <div className='text-secondary grid gap-2'>
                <p className='text-center text-xs'>Isha</p>
                <p className='text-center ml-2 text-xs'>
                    <BsFillMoonStarsFill />
                </p>
                <p className='text-center text-xs'>19:11</p>
            </div>
        </div>
      
    </div>
  )
}

export default TopContent
