


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
