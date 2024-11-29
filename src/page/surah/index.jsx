import React, {useEffect, useState} from 'react'
import { IoCaretBackSharp, IoSearch  } from "react-icons/io5";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner.jsx';

const Surah = () => {
  const [surah, setSurah] = useState([])
   const {number} = useParams()

  const getApi = async () => {
    const res = await axios.get(`https://quranenc.com/api/v1/translation/sura/indonesian_sabiq/${number}`)
    console.log(res.data)
    setSurah(res.data.result)
  }

  useEffect(() => {    
    getApi()
  },[]);

  return (
    <div className='md:max-w-screen-md md:m-auto h-screen bg-secondary'>
      <div className='bg-primary px-4 py-4 flex justify-between items-center'>
        <Link to="/quran">
          <IoCaretBackSharp className='text-secondary'/>
        </Link>
        <p className='text-secondary text-center font-semibold'>Qur'an</p>
        <IoSearch className='text-secondary'/>
      </div>
      <div className='bg-secondary py-2 px-4'>
      </div>
      <div className='bg-secondary pb-2'>
      {
        surah.length >= 1 ? (
          surah.map((val, index) => (
            <div className='py-2 px-4 grid border-b-[1px] group' key={index}>
              <p className='text-lg text-right mb-2'>
              {val.arabic_text}</p>
              <p className='text-xs text-slate-700'>{val.translation}</p>
            </div>
          ))
        ): (<Spinner />)

      }
      </div>
    </div>
    
  )
}

export default Surah