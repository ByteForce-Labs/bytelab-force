import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-[#263238] p-[6rem]">
      <section className="flex  justify-between">
        <div className="w-[35%]">
          <h2 className=" font-poppins text-white font-bold mb-[2rem]">Byteforce Labs</h2>
          <p className="font-spaceGrotesk text-white">With our expertise and passion for innovation, we empower businesses and individuals to embrace the decentralized future and create transformative experiences.</p>
        </div>
        <div className="">
          <h3 className="text-white font-poppins font-[600] mb-[1rem]">Fast Links</h3>
          <ul className="font-spaceGrotesk text-white">
            <li className="">Overview</li>
            <li className="">Download</li>
            <li className="">Security</li>
            <li className="">Support</li>
            <li className="">Feature Reports</li>
          </ul>
        </div>
        <div className=" justify-end flex flex-col w-[30%]">
          <h4 className="font-poppins text-white mb-5">Subscribe to our Newsletter</h4>
          <div className="">
            <input type="text" className="w-full font-spaceGrotesk p-3 outline-none rounded-[1rem] bg-[#D9D9D92E] text-[#808080]"/>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
