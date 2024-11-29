import React from 'react'
import { FaQuran } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { RiCompass3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BottomContent = () => {
  return (
    <div className='p-4 bg-secondary rounded-t-xl pb-20'>
        <p className='font-medium mb-4'>All Features</p>
        <div className='flex justify-between gap-2 mb-4'>
            <Link to="/quran" className='text-center'>
                <div className='p-4 bg-primary w-15 h-15 rounded-xl'>
                    <p><FaQuran className='text-secondary' /></p>
                </div>
                <p className='text-xs mt-1'>Quran</p>
            </Link>
            <div className='text-center'>
                 <div className='p-4 bg-primary w-15 h-15 rounded-xl'>
                    <p><HiSpeakerWave className='text-secondary'/></p>
                </div>
                <p className='text-xs mt-1'>Adzan</p>
            </div>
            <div className='text-center'>
                 <div className='p-4 bg-primary w-15 h-15 rounded-xl'>
                    <p><RiCompass3Fill className='text-secondary'/></p>
                </div>
                <p className='text-xs mt-1'>Qibla</p>
            </div>
            <div className='text-center'>
                 <div className='p-4 bg-primary w-15 h-15 rounded-xl'>
                    <p><FaHeart className='text-secondary'/></p>
                </div>
                <p className='text-xs mt-1'>Donate</p>
            </div>
            <div className='text-center'>
                <div className='p-4 bg-primary w-15 h-15 rounded-xl'>
                    <p><IoGrid className='text-secondary' /></p>
                </div>
                <p className='text-xs mt-1'>All</p>
            </div>
        </div>
        <div className='flex justify-between mb-4'>
            <p className='font-medium'>Ngaji Online</p>
            <p className='font-medium text-primary text-sm'>See All</p>
        </div>
        <div className='flex overflow-x-auto p-2'>
            <div className='flex gap-2'>
                <div className='relative bg-primary w-56 h-36 rounded-md overflow-hidden shadow-md shadow-slate-500'>
                    <img src='https://thumb.tvonenews.com/thumbnail/2023/02/23/63f73904e5763-jadwal-kajian-dan-ceramah-ustaz-abdul-somad-uas-februari-2023_1265_711.jpg' alt='default' className='w-full h-full object-cover' />
                    <div className='px-2 py-1 text-secondary bg-myred absolute right-0 top-0 mt-2 mr-2 rounded-lg '><p className='text-xs'>LIVE</p></div>
                    <div className='px-2 py-1 text-secondary bg-primary absolute left-0 bottom-0 mb-2 ml-2 rounded-lg text-xs'><p>3.6K viewers</p></div>
                </div>
                <div className='relative bg-primary w-56 h-36 rounded-md overflow-hidden shadow-md shadow-slate-500'>
                    <img src='https://api.comika.media/uploads/source/Dai-Halham_220915081426.jpeg' alt='default' className='w-full h-full object-cover' />
                    <div className='px-2 py-1 text-secondary bg-myred absolute right-0 top-0 mt-2 mr-2 rounded-lg text-xs'><p>LIVE</p></div>
                    <div className='px-2 py-1 text-secondary bg-primary absolute left-0 bottom-0 mb-2 ml-2 rounded-lg text-xs'><p>4.3K viewers</p></div>
                </div>
                <div className='relative bg-primary w-56 h-36 rounded-md overflow-hidden shadow-md shadow-slate-500'>
                    <img src='https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/01/18/3647347184.jpg' alt='default' className='w-full h-full object-cover' />
                    <div className='px-2 py-1 text-secondary bg-myred absolute right-0 top-0 mt-2 mr-2 rounded-lg text-xs'><p>LIVE</p></div>
                    <div className='px-2 py-1 text-secondary bg-primary absolute left-0 bottom-0 mb-2 ml-2 rounded-lg text-xs'><p>4.3K viewers</p></div>
                </div>
                <div className='relative bg-primary w-56 h-36 rounded-md overflow-hidden shadow-md shadow-slate-500'>
                    <img src='https://palpres.disway.id/upload/d55936796cf65b6403a5ce808c76f734.jpeg' alt='default' className='w-full h-full object-cover' />
                    <div className='px-2 py-1 text-secondary bg-myred absolute right-0 top-0 mt-2 mr-2 rounded-lg text-xs'><p>LIVE</p></div>
                    <div className='px-2 py-1 text-secondary bg-primary absolute left-0 bottom-0 mb-2 ml-2 rounded-lg text-xs'><p>4.3K viewers</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomContent
