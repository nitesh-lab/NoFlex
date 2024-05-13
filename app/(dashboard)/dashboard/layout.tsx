import NavBar_DashBoard from '@/Components/DashBoard/NavBar_DashBoard'
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
