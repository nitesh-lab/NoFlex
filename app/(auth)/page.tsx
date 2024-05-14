

import Bottom from "../../components/Home/Bottom";
import NavBar from '../../components/Home/NavBar';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const grad = {
    width: "100%",
    height: "100vh",
    zIndex: 10,
    background: "rgba(0, 0, 0, 0.4)",
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
};


export default async function Page() {

  const session=await auth()

  if(session?.user){
    redirect("/dashboard")
  }
  return (
    <>
    <div className="relative w-[100vw] bg-[url('/Home.jpg')] min-h-[100%] h-[100%] overflow-x-hidden">
        <div style={grad}></div>
        <NavBar/>
      <Bottom/>
    </div>  
    </>
  );
}

