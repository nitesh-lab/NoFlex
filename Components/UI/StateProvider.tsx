"use client"

import { Store } from '@/Store/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function StateProvider({children}:{children:React.ReactNode}) {
  return (
    <>
    <Provider store={Store}>
        {children}
    </Provider>
    </>
  )
}
