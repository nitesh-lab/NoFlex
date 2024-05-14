"use client"
import { PlayIcon } from "lucide-react";
import { MovieInfo } from "./Movie";


export default function MovieDetail({obj}:{obj:MovieInfo|undefined}){
    return (
      <>
      {obj &&<div onClick={(e)=>e.stopPropagation()} className='h-[100%] modalcontainer'>
        <h1 className='text-[2rem] md:text-[4rem]'>{obj.title}</h1>
        <p className=' pt-[0.6rem] sm:pt-[1.6rem] text: 2rem;'>
          <span className=' text-yellow-500'>Rating: {obj.vote_average} </span>
          Release date: {obj.release_date} Runtime:{ obj.runtime}
        </p>
  
        <p style={{color: "rgb(122, 122, 122)"}}  className='  pt-[2rem] text-[1rem] sm:text-[2rem] hyphens-auto'>{obj.tagline}</p>
       
        <div className=" bg-red-500 mt-[0.2rem] sm:mt-[1rem] flex justify-center text-center p-[0.5rem] hover:bg-red-800 hover:cursor-pointer rounded-[40%] w-[3rem] sm:w-[5rem] sm:p-[1rem]">
          <div>
          <PlayIcon  />
          </div>
         
        </div>
        </div>}</>
    )
  }
  