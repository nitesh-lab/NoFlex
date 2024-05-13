"use client"
import React, { Suspense, useRef } from 'react'
import SwiperComp from './SwiperComp'

export default function MovieList() {

  return (
    <div className=' bg-transparent flex flex-col gap-[2rem] '>
      
      <Suspense fallback={<p>loading...</p>}>
      <SwiperComp height='400px' title="fetchTopRated"  label="TopRated" bgColor='black'/>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
      <SwiperComp height='400px' title="fetchActionMovies" label="Action"   bgColor='black'/>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
      <SwiperComp height='400px' title="fetchFamilyMovies" label="Family"   bgColor='black'/>
      </Suspense>

      <SwiperComp height='400px' title="fetchComedyMovies" label="Comedy"   bgColor='black'/>
      <SwiperComp height='400px' bgColor='black' title="fetchRomanceMovies" label="Romance"/>
      <SwiperComp height='400px' title="fetchHorrorMovies" label="Horror"   bgColor='black'/> 
    
    </div>
  )
}
