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

  return (
    <motion.div initial={{y:-1000}} animate={{y:0}} transition={{delay:0.5,duration:1}}
        
     className='w-[50%]  h-[50%] text-[#fff]  modal__container movieshadow bg-gray-400'>

      <h1 className='text-[4rem]'>{obj.title || ""}</h1>
      <p className='  pt-[1.6rem] text: 2rem;'>
        <span className='text-[2rem[ text-yellow-500'>Rating: {5 * 10}% </span>
        Release date: {obj.release_date || obj.first_air_date} Runtime:{' '}
        {obj.runtime || obj.episode_run_time}m
      </p>

      <p className='pt-[0.5rem] text-[2rem]'>
        {obj.number_of_episodes ? ' Episodes: ' + obj.number_of_episodes : ''}
        {obj.number_of_seasons ? ' Seasons: ' + obj.number_of_seasons : ''}
      </p>
      <p style={{color: "rgb(122, 122, 122)"}}  className=' pt-[2rem] text-[2rem] hyphens-auto'>{obj.overview}</p>
     
      <button className='modal__btn bg-red-500'>
        <PlayIcon className='modal__btn--icon' />
        Play
      </button>
      <button className='modal__btn'>
        <ShoppingBasketIcon className='modal__btn--icon' />
        My List
      </button>

     </motion.div>
  )
}

