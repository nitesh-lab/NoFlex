"use client"

import React, { useEffect, useState } from 'react'


export default function Logo() {


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


  return (
    <>
       {!isHide && <h1 className='text-red-600 text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem]
                 xl:text-[2rem] fixed top-[25px]  left-[0px] ml-[25px] font-extrabold z-[10]'>NOFLEX</h1>
}</>
  )
}
