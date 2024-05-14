import React from 'react'
import { motion } from 'framer-motion'
import { ArrowBigDownDash, PlayIcon, ShoppingBasketIcon } from 'lucide-react'

const  obj=  {
title:"",
name:"",
vote_average:"",
release_date:"",
first_air_date:"",
runtime:"",
episode_run_time:"",
number_of_episodes:"",
number_of_seasons:"",
overview:"",
}
export default function Movie() {

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/qsnXwGS7KBbX4JLqHvICngtR8qg.jpg&quot)`,
  }
  return (
    <motion.div initial={{y:-1000}} animate={{y:0}} transition={{delay:0.5,duration:1}}
      style={backgroundStyle}
     className='w-[100%]  bgdrop h-[70%] text-[#fff]   movieshadow bg-gray-400'>
      <MovieDetail/>

     </motion.div>
  )
}




function MovieDetail(){
  return (

    <>
    <div className='h-[100%] modalcontainer'>
      <h1 className='text-[4rem]'>{"Nitesh"|| ""}</h1>
      <p className='  pt-[1.6rem] text: 2rem;'>
        <span className='text-[2rem[ text-yellow-500'>Rating: 20% </span>
        Release date: {"20/1/2018"|| obj.first_air_date} Runtime:{"135"|| obj.episode_run_time}m
      </p>

      <p style={{color: "rgb(122, 122, 122)"}}  className='  pt-[2rem] text-[1rem] sm:text-[2rem] hyphens-auto'>{"njsnsjdns"||obj.overview}</p>
     
      <div className=" bg-red-500 mt-[1rem] flex justify-center text-center p-[0.5rem] hover:bg-red-800 hover:cursor-pointer rounded-[40%] w-[3rem] sm:w-[5rem] sm:p-[1rem]">
        <div>
        <PlayIcon  />
        </div>
       
      </div>
      </div></>
  )
}




