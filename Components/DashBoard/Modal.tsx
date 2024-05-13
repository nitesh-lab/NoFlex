"use client"
import { IRootState } from '@/Store/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'

export default function Modal() {
   
   const s=useSelector((s:IRootState)=>s.movie.isSelected)
    const [showModal,setShowModal]=useState<boolean>(false)

   useEffect(()=>{
    if(s!==-1){
        setShowModal(true);
    }
   },[s])

  return (
    showModal &&
    <>
    <div className="fixed top-0 z-[1000] left-0 w-[100vw] h-[100vh]
     bg-black bg-opacity-40 backdrop-blur-lg flex justify-center items-center">
 
    <Movie/>
    </div>     
    </>
  )
}













































