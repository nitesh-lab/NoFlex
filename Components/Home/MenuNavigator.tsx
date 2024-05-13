"use client"
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import Image from 'next/image';
import DropDown from './DropDown';


export default function MenuNavigator() {

    const [showSearchBar,setSearchBar]=useState<boolean>(true);
    const [showDropdown,setShowDropdown]=useState<boolean>(false)
    const [isHide,setShouldHide]=useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 100) {
            setShouldHide(true);
          } else {
            setShouldHide(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const variants = {
      show: {
        opacity: 1,
        x: [50,0],
        transition: {
         
          duration: 0.3,
        },
      },
      hide: {
        opacity: 0,
        x:[0,50],
        transition:{
          
            duration:0.6,
        }
      },
    };
  


    return !isHide && <div className=" flex gap-[1rem] w-[70%]  sm:w-[65%] md:w-[60%]  lg:w-[50%] fixed top-[0] px-[20px]
    py-[10px] text-[1rem] text-white z-[10] cursor-pointer 
     right-0 rounded-[10px] sm:mr-[25px]">
        
      <motion.input
        variants={variants}
        autoFocus={true}
        animate={showSearchBar?"show":"hide"}
          type="text" 
          className="w-full  border-[1px] border-[#fff] rounded-full  outline-white  bg-gray-800 flex bg-transparent p-2 text-white outline-1"
          placeholder="Search name movie or select options"
        ></motion.input>

        <button onClick={()=>setSearchBar((s)=>!s)} type="submit" className="relative p-2 bg-[#0d1829] rounded-full">
          <Search/>
        </button>

    <div className=' justify-center items-center flex max-w-[3rem] max-h-[3rem]'>
    
    <div onClick={()=>setShowDropdown((s)=>!s)}>
    <Image src="/Home.jpg" className='rounded-full' width={100} height={100} alt='nope' />
    </div>
    {showDropdown && <DropDown/>}
    </div>

     </div>}
