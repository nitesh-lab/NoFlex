"use client"
import { IRootState } from '@/Store/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from './Movie'
import { toggle_Movie } from '@/Store/MovieSlice'
import { AnimatePresence, motion } from 'framer-motion'

export default function Modal() {
   
   const s=useSelector((s:IRootState)=>s.movie.isSelected)
    const [showModal,setShowModal]=useState<boolean>(false)
  const dispatch=useDispatch();
   useEffect(()=>{
    if(s!==-1){
        setShowModal(true);
    }
    else{
      setShowModal(false)
    }
   },[s])

  return (
    <>
    <AnimatePresence>
    {showModal && <motion.div exit={{y:-500,opacity:40}} transition={{duration:1}} className=" fixed top-0 z-[1000] left-0 w-[100vw] h-[100vh]
      bg-opacity-40 backdrop-blur-lg flex justify-center items-center" onClick={()=>dispatch(toggle_Movie(-1))}>
    <Movie MovieId={s}/>
    </motion.div>  }  
    </AnimatePresence> 
    </>
  )
}













































