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


  return (<>
      {movieData ? playVideo? (

  <div className="container max-h-[400px]" > 
  <iframe className="responsive-iframe"  src={`https://www.youtube.com/embed/${trailerData?.key}?version=3&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=0&amp;loop=1`} allowFullScreen={true} allow="autoplay; encrypted-media"></iframe>
</div>
       ):  <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}/>
      :null}

      {/* <div className="absolute xxl:top-[80%] mt:top-[40%] z-[1000] ml-4 md:ml-16">
        <p className="text-black font-bold text-[1 rem] md:text-[1.5rem] md:text-lg mt-[3rem] md:mt-[4rem] w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movieData?.title}
        </p>
      </div> */}
   </>
  );
}
