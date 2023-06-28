import React, { useEffect, useRef } from 'react'

const MainLayout = () => {
    const header = useRef()
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            header.current.classList.toggle("header-sticky", window.scrollY > 0)
        })
    }, [])
  return (
    <header ref={header} className="z-[20] fixed top-0 left-0 w-[100%] flex justify-between py-[2rem] px-[1rem]">
        <h1 className="font-poppins font-[900] text-[1.1rem]">Byteforce Labs</h1>
        <ul className=" font-spaceGrotesk font-bold flex gap-3">
            <li>WORK</li>
            <li>PATNERSHIPS</li>
            <li>SERVICES</li>
            <li>CAREERS</li>
            <li>CONTACT</li>
        </ul>  
    </header>
  )
}

export default MainLayout
