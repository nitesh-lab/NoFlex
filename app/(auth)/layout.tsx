// import Image from 'next/image'
// import React from 'react'

// export default function layout({children}:{children:React.ReactNode}) {

//     const grad={
//  width: "100%",
// 	height: "100vh";
// 	z-index: "10",
// 	background: rgba(0, 0, 0, 0.4);
// 	background-image: linear-gradient(
// 		to top,
// 		rgba(0, 0, 0, 0.8) 0,
// 		rgba(0, 0, 0, 0) 60%,
// 		rgba(0, 0, 0, 0.8) 100%
// 	);
// }
//   return (
//     <>
//     <div>{children}</div>

    
//     <Image className='text-red-500 bg-black  font-bold 
//     fixed top-[25px]  left-[0px] ml-[25px] z-[10]'src="/logo.png" alt="nope" width={120} height={150} />
    
//     <div style={grad}></div>
//   </>
// //   )
// }


import Image from 'next/image'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {

    const grad = {
        width: "100%",
        height: "100vh",
        zIndex: 10,
        background: "rgba(0, 0, 0, 0.4)",
        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
    };

    return (
        <>
            <div>{children}</div>

        </>
    );
}
