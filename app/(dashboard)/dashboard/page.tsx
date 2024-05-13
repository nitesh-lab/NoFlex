import Header from '@/Components/DashBoard/Header'
import MovieList from '@/Components/DashBoard/MovieList'
import React from 'react'

export default function page() {
  return (
    <div className='mt-[5rem] bg-black overflow-x-hidden '>
      <Header/>   
      <MovieList/>
    </div>
  )
}
