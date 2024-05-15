/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowBigDownDash, PlayIcon, ShoppingBasketIcon } from 'lucide-react'
import MovieDetail from './MovieDetail'
import axios from 'axios'
import ReactPlayer from "react-player";
import { MovieTrailer } from '@/lib/utils'
import YouTubePlayer from "react-youtube";


const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls:0,
  },
};



export type MovieInfo = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
      id: number;
      name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Movie({MovieId}:{MovieId:number}) {

  const [moviedata,setMovieData]=useState<MovieInfo>();
  const [trailer,setTrailer]=useState<string>("");
  const player=useRef<ReactPlayer | null>(null);
   const [isPlaying,setPlaying]=useState<boolean>(false)
   const [videoLoaded, setVideoLoaded] = useState(false);


  useEffect(()=>{
    async function getTrailer() {
      if(moviedata &&  "title" in moviedata){
       MovieTrailer(moviedata.id.toString())
        .then((url)=>{
          console.log(url)
          setTimeout(()=>{
            setPlaying(true);
          },7000);
          setTrailer(url.key||"")
        })
        .catch((error)=> console.log(error));
}
}
    getTrailer()
  },[moviedata])

  useEffect(()=>{
    async function GetData() {
      if(MovieId && MovieId!==-1){
      const d=await axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    setMovieData(d.data)
    }          
    }
    GetData();
  },[MovieId])

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviedata?.backdrop_path})`,
  }

  
  const onReady = () => {
    console.log("called")
    setVideoLoaded(true);
  };

  return  (moviedata?
    <motion.div initial={{y:-1000}} animate={{y:0}} transition={{delay:0.5,duration:1}}
      style={backgroundStyle}
     className='w-[100%] relative   bgdrop h-[70%] text-[#fff]   movieshadow bg-black'>
      <div onClick={(e)=>e.stopPropagation()} className='h-[100%] w-[100vw]'>
      {trailer.length>0 && isPlaying ?
    <YouTubePlayer className={`absolute z-[1]   h-[100%] w-[100%]  ${!videoLoaded ? "hidden":""} `}
      videoId={trailer} onReady={onReady}   opts={opts} />
      :<img className='absolute z-[0]' src='' />}
      <MovieDetail obj={moviedata}/>
        </div>
    </motion.div>:<p>loading</p>)
}
    