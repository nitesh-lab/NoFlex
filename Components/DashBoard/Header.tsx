/* eslint-disable @next/next/no-img-element */
"use client"
import React, {  useState } from 'react'

export default function Header() {

const [isPlay,setisPlay]=useState<boolean>(false)
  
  const data={videoUrl:"",thumbnailUrl:"Home.jpg",title:"Nitesh",description:"Semwal",id:""}
  
  return (

  <div className="relative h-[56.25vh] sm:h-[56.25vh]">
  <video
    autoPlay
    muted
    loop
    className="w-full  h-[56.25vh] sm:h-[56.25vh] object-cover brightness-[60%] transition"
    src={data?.videoUrl}
    poster={data?.thumbnailUrl}
  ></video>
  <div className="absolute top-[30%] mt:top-[40%] ml-4 md:ml-16">
    <p className="text-white font-extrabold text-3xl md:text-5xl h-full w-[50%] lg:text-6xl drop-shadow-xl">
      {data?.title}
    </p>
    <p className="text-white font-bold text-[1 rem] md:text-[1.5rem] md:text-lg mt-[3rem] md:mt-[4rem] w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
      {data?.description}
    </p>

  </div>
</div>
);
};


