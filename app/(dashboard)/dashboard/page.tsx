import Header from '@/Components/DashBoard/Header'
import MovieList from '@/Components/DashBoard/MovieList'
import Modal from '@/components/DashBoard/Modal'
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
