
import Header from '@/Components/DashBoard/Header'
import Modal from '@/Components/DashBoard/Modal'
import MovieList from '@/Components/DashBoard/MovieList'
import axios from 'axios'
import React from 'react'

export default async function page() {
 
  return (
    <div className=' bg-black overflow-x-hidden '>
      <Header/>   
      <Modal/>
      <MovieList/>
    </div>
  )
}