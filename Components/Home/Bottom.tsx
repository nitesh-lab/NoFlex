"use client"
import {Email_Input, toggle_Login } from '@/Store/LoginSlice'
import { IRootState } from '@/Store/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignUpScreen from './SignUpScreen'

export default function Bottom() {

    const {openSignIn}=useSelector((s:IRootState)=>s.login)
	const [email,setEmail]=useState<string>("");

    const dispatch=useDispatch();

	function handleSubmit(){
		dispatch(Email_Input(email));
		dispatch(toggle_Login())
	}

return (
   <>
   <div className="z-[10] flex justify-center absolute top-[15%] w-[100%] p-[20px]">
    <div className="text-center text-white w-[100%] py-[75px] px-[0px] max-w-[950px] my-[0px] mx-[auto]">
					{openSignIn ? (
						<SignUpScreen />
					) : (
						<>
							<h1 className='text-[1.5rem] sm:text-[2.2rem] lg:text-[2.5rem] mb-[0.5em] font-extrabold'>Unlimited movies, TV shows, and more.</h1>
							<h2 className='text-[1.2rem] sm:text-[1.8rem] lg:text-[1.8rem] mb-[0.2em] font-extrabold'>Watch anywhere. Cancel anytime.</h2>
							<h3 className='text-[1rem] sm:text-[1.5rem] lg:text-[1.5rem] mb-[0.2em]  '>
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>
							<div className="px-[20px]">
								<form>
									<input value={email} onChange={(e)=>setEmail(e.target.value)} className='my-[0.2em] p-[1em] rounded-lg min-w-[30%]' type="email" required={true} placeholder="Email address" />
									<button
										onClick={() =>handleSubmit()}
										type="submit"
										className="bg-red-500 inline-block rounded-lg min-h-[40px] ml-[1em] py-[1em] px-[1em] 
                                        transition-[0.4s]">
										GET STARTED
									</button>
								</form>
							</div>
						</>
					)}
				</div>
                </div>
    
    </>
  )
}


// display: inline-block;
// 	box-sizing: border-box;
// 	font-size: 16px;
// 	border-radius: 2px;
// 	min-height: 40px;
// 	padding: 16px 20px;
// 	-webkit-border-radius: 2px;
// 	-moz-border-radius: 2px;
// 	-ms-border-radius: 2px;
// 	-o-border-radius: 2px;
// 	border: none;
// 	transition: 0.4s;