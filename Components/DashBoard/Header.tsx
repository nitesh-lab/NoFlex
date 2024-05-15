/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
 "use client"

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { MovieTrailer } from '@/lib/utils';
import axios from 'axios';
import YouTubePlayer from 'react-player/youtube';

export default function Header() {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [trailerData, setTrailerData] = useState<{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }>();
  const [movieData, setMovieData] = useState<{
    backdrop_path: string;
    title: string;
    tagline: string;
  }>();
  const [showlight,setShowlight]=useState(true)

  useEffect(() => {
    async function fetchData() {
      const [movieApiResponse, trailerUrl] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/1011985?api_key=${process.env.NEXT_PUBLIC_API_KEY}`),
        MovieTrailer('1011985'),
      ]);

      setMovieData(movieApiResponse.data);
      setTrailerData(trailerUrl);
      
      // After 5 seconds, set playVideo to true to trigger the video playback
      setTimeout(() => {
        setPlayVideo(true);
        setShowlight(false);
      }, 7000);
    }
    fetchData();
  }, []);


  return (
    <div className="text-black relative h-[56.25vh] sm:h-[56.25vh]">
      {movieData ? playVideo? (
        <YouTubePlayer
          url={`https://youtube.com/watch?v=${trailerData?.key}`}
          playing={true}
          controls={false}
          width='100vw'
          height='100%'
        />):  <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}/>
      :null}

      <div className="absolute top-[30%] mt:top-[40%] ml-4 md:ml-16">
        <p className="text-black font-extrabold text-3xl md:text-5xl h-full w-[50%] lg:text-6xl drop-shadow-xl">
          {movieData?.title}
        </p>
        <p className="text-black font-bold text-[1 rem] md:text-[1.5rem] md:text-lg mt-[3rem] md:mt-[4rem] w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movieData?.tagline}
        </p>
      </div>
    </div>
  );
}
