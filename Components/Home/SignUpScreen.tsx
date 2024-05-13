import React from 'react'
import AuthForm from './AuthForm'
import Image from 'next/image'

export default function SignUpScreen() {
  return (
    <>
    <div style={{boxSizing:"border-box"}} className='absolute top-[30px] left-[0px] right-[0px] w-[100%] min-h-[100vh] flex justify-center'>
        
    <div style={{backgroundColor:"rgba(0, 0, 0, 0.75)"}} className="py-[60px] px-[68px] rounded-[4px] 
    w-[450px] max-w-[450px] max-h-[460px]">
    <h1 className='font-extrabold text-[1.5rem]'>Sign In</h1>
        <AuthForm/>
    </div>  
    </div> 
    </>
  )
}
