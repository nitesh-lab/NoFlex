import NavBar from '@/Components/Home/NavBar'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <>
    <NavBar/>
    {children}
    </>
  )
}
