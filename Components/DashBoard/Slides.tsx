"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image
 from 'next/image'
import { movie } from './SwiperComp'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_Movie } from '@/Store/MovieSlice'
import { IRootState } from '@/Store/store'

export default function Slides({elem}:{elem:movie}) {

    const dispatch=useDispatch()
    const id:number=useSelector((s:IRootState)=>s.movie.isSelected)

    function handleClick(){
        if(id!==elem.id ){
        dispatch(toggle_Movie(elem.id));
        }
    }
  return (
    <div  onClick={()=>handleClick()} className="keen-slider__slide" >
    <div className='flex justify-center items-center w-[100%] h-[100%]'>
        <motion.div   whileHover={{scale:1.2}}  className='rounded-lg h-[80%] w-[80%]   ' 
        transition={{duration:0.6}}  >
          
          <Image src={`https://image.tmdb.org/t/p/original${elem.poster_path}`} width={100} height={100} alt="nope" className='h-[100%] w-[100%]' />
      </motion.div>
        </div>
    </div>
  )
}
