

const MainLayout = ({header}) => {
  return (
    <header ref={header} className="z-[20] fixed top-0 left-0 w-[100%] flex justify-between py-[2rem] pl-[1rem] pr-[3rem]">
        <h1 className="font-poppins font-[900] text-[1.1rem]">Byteforce Labs</h1>
        <ul className=" font-spaceGrotesk font-[500] flex gap-3">
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
