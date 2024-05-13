"use client"


import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../UI/form'
import { Button } from '../UI/button'
import CustomInput from '../Common/CustomInput'
import { signIn } from "next-auth/react"
import Image from 'next/image'

export const AuthSchema=z.object({
    email:z.string().email().min(5,"Not Valid Email"),
    password:z.string().min(8,"Minimum 8 Characters")
})

export default function AuthForm() {
 
    const form=useForm<z.infer<typeof AuthSchema>>({
            resolver:zodResolver(AuthSchema),
            defaultValues:{
                email:"",
                password:"",
            }
           })

           async function onSubmit(data:z.infer<typeof AuthSchema>){
            
            await signIn("credentials", data,{redirectTo:"/"})
            
        }
        
            async function onSubmitGoogle(){
                await signIn("google",{redirectTo:"/"});
            }

    return (
    <>
     <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex mb-[10%] mt-[10%] flex-col gap-[1em] items-center'>
        <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
        <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
        </div>
      <Button className='cursor-pointer bg-red-600 text-white p-[1em] hover:bg-red-400' type="submit">Submit</Button>
    </form>
    </Form>
    <div onClick={()=>onSubmitGoogle()} className='cursor-pointer mt-[2em] items-center flex gap-[1em]'>
            <div>
            <Image src="/google.png" height={40} width={40} alt='nope' />
            </div>
            <div >
                <p className='font-bold'>Login With Google</p>
            </div>
        </div>
    
    </>
  )
}
