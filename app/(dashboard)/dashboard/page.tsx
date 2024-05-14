
import Header from '@/Components/DashBoard/Header'
import Modal from '@/Components/DashBoard/Modal'
import MovieList from '@/Components/DashBoard/MovieList'
import React from 'react'

export default function page() {
  return (
    <div className=' bg-black overflow-x-hidden '>
      <Header/>   
      <Modal/>
      <MovieList/>
    </div>
  )
}
