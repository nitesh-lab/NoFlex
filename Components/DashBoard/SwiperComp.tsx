"use client"

 import {motion} from "framer-motion";

import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { axiosInstance, request } from "@/lib/utils";
import Image from "next/image";
import Slides from "./Slides";

interface MovieData {
  fetchTrending: string;
  fetchNetflixOriginals: string;
  fetchTopRated: string;
  fetchRomanceMovies: string;
  fetchActionMovies: string;
  fetchWarMovies: string;
  fetchComedyMovies: string;
  fetchHorrorMovies: string;
  fetchCrimeMovies: string;
  fetchDocumentariesMovies: string;
  fetchAdventureMovies: string;
  fetchDramaMovies: string;
  fetchMysteryMovies: string;
  fetchAnimationMovies: string;
  fetchWesternMovies: string;
  fetchFamilyMovies: string;
  fetchHistoryMovies: string;
  fetchMusicMovies: string;
  fetchFantasyMovies: string;
  fetchScienceFictionMovies: string;
}

export interface movie{
  
adult:boolean,

backdrop_path:string,
genre_ids:number[],
id:number
original_language:string,
original_title:string
overview:string
popularity:number,

poster_path:string,
release_date:string,
title:string,
vote_average:number


}

export default function SwiperComp({bgColor,height,title,label}:{label:string,title:keyof MovieData,bgColor:string,height:string}) {

  const [options,setOptions] = useState({});
  const [data,setData]=useState<movie[]>();
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(options)



  useEffect(()=>{
    async function GetMovies() {

      if(title){
      const s:string=request[title] 
      const d=await axiosInstance.get(s);
      setData(d.data.results);
      
     setOptions({initial: 0,
      loop: true,
      mode: "free",
      slides: {
        perView: 1,
        spacing: 5,
      },
      breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 3, spacing: 10 },
          },
        },
      slideChanged(slider: { track: { details: { rel: React.SetStateAction<number>; }; }; }) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })
    }
    }
    GetMovies();
  },[title])

  return (
    <>
    <motion.div initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.3,duration:1.5}}>
        <h1 className="text-white mt-[1rem] ml-[2rem] font-extrabold text-[1.5rem]">{label}</h1>
      <div className="navigation-wrapper">
        <div ref={sliderRef}
        style={{ backgroundColor:bgColor,height:height}} 
        className="keen-slider hover:cursor-pointer "
        >
           {data && data.map((elem,i)=>{

          return (
            <Slides key={i} elem={elem}/> 
          )
          })

        }
        </div>
        
        {instanceRef.current && (
          
          <>
          
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef?.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides.length - 1
              }
            />
          </>
        )}
      </div>
      </motion.div>
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <>
   
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
    </>
  )
}