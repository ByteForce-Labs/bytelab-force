import React from 'react'

const MainLayout = () => {
  return (
    <header className=" fixed top-0 left-0 w-[100%] bg-white flex justify-between p-[1rem]">
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
