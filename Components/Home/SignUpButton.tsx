"use client"

import { toggle } from '@/Store/LoginSlice';
import { User } from 'next-auth';
import { useDispatch } from 'react-redux'
import MenuNavigator from './MenuNavigator';


export default function SignUpButton({session}:{session:User|undefined}) {

    const dispatch=useDispatch();
    return (
    <>
     {!session ?<button onClick={()=>dispatch(toggle())} className=" fixed top-[25px] px-[20px]
             py-[10px] text-[1rem] text-white z-[10] cursor-pointer bg-[#e50914]
              right-[0px] rounded-[10px] mr-[25px]">
                Sign In
            </button>:<MenuNavigator/>}
    </>
  )
}
