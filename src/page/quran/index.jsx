import React, {useEffect, useState} from 'react'
import { IoCaretBackSharp, IoSearch  } from "react-icons/io5";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner';

const Quran = () => {
  const [listSurah, setListSurah] = useState([])

  const getApi = async () => {
    const res = await axios.get('https://api.alquran.cloud/v1/quran')
    if(res.data.code == 200){
      setListSurah(res.data.data.surahs)
    }else{
    }
  }

  useEffect(() => {    
    getApi()
  },[]);

  return (
    <div className='md:max-w-screen-md md:m-auto'>
      <div className='bg-primary px-4 py-4 flex justify-between items-center'>
        <Link to="/">
          <IoCaretBackSharp className='text-secondary'/>
        </Link>
        <p className='text-secondary text-center font-semibold'>Qur'an</p>
        <IoSearch className='text-secondary'/>
      </div>
      <div className='bg-secondary py-2 px-4'>
        <p>List surah</p>
      </div>
      <div className='bg-secondary pb-2'>
      {
        listSurah.length >= 1 ? (
          listSurah.map((val, index) => (
            <Link to={`/surah/${val.number}`} className='py-2 px-4 flex justify-between items-center border-b-[1px] group' key={index}>
              <p className='text-sm '>{val.number}. {val.englishName}</p>
              <p className='text-lg '>{val.name}</p>
            </Link>
          ))
        ): (<Spinner />)

      }
      </div>
    </div>
    
  )
}

export default Quran