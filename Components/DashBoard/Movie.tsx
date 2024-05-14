"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowBigDownDash, PlayIcon, ShoppingBasketIcon } from 'lucide-react'
import MovieDetail from './MovieDetail'
import axios from 'axios'
import movieTrailer from 'movie-trailer'

const opts = {
  height: '450',
  width: '95%',

  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}



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

  useEffect(()=>{

    async function getTrailer() {
      if(moviedata &&  "title" in moviedata){
        movieTrailer(null ,{ tmdbId: moviedata.id })
        .then((url)=>{
          console.log("url is "+url);
          const urlParams=new URLSearchParams(new URL(url||"").search);
          console.log("urlParamsn"+urlParams);
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
  return  moviedata?
    <motion.div initial={{y:-1000}} animate={{y:0}} transition={{delay:0.5,duration:1}}
      style={backgroundStyle}
     className='w-[100%]  bgdrop h-[70%] text-[#fff]   movieshadow bg-gray-400'>
      <MovieDetail obj={moviedata}/>
     </motion.div>:<p>loading</p>
     
    }