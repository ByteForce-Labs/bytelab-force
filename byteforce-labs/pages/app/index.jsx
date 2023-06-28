import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'

const Index = () => {
  return (
    <main className="main-bg bg-[#000] h-[100vh]">
        <Parallax pages={5}>
            <ParallaxLayer 
                offset={0}
                sticky={{
                    start: 0,
                    end: 0.85,
                }}
                style={{
                    backgroundImage: `url(/Images/hero.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: "-1"
                }}>
            </ParallaxLayer>
            <ParallaxLayer 
                speed={-2}
                offset={0} 
                className="flex items-center justify-center">
                <h2 className=" font-poppins text-[3rem] text-black">Web3 Builder</h2>
            </ParallaxLayer>
            <ParallaxLayer
                className="curved-bottom"
                offset={1}
            >
                <p className="w-[60%] mx-auto font-spaceGrotesk text-[1.6rem] font-[600] mt-[15%]">
                    Byteforce Labs is a Lagos-based web development agency that specializes in creating custom websites and applications for businesses mostly for web3. Our team of experienced developers and designers work closely with clients to deliver high-quality solutions that meet their unique needs.
                </p>
            </ParallaxLayer>
            <ParallaxLayer
                className="flex items-center pl-[3rem]"
                offset={2}
                speed={1}
                >
                <div className="bg-white w-[45%] p-[3rem]">
                    <p className=" font-spaceGrotesk">NEW <br /> PROJECT</p>
                    <h3 className="mt-[1rem] font-poppins fpnt-[900] text-[1.7rem]">Vyperium</h3>
                    <p className=" font-spaceGrotesk w-[70%] mt-[10px]">A site for funny people who need to be taken seriously</p>
                    <div className=" mt-[1rem] font-spaceGrotesk">
                        <button className="border-[2px] border-black rounded-[5rem] py-[10px] px-[1rem]">LEARN MORE</button>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                className="curved-top"
                offset={3}
            >

            </ParallaxLayer>
        </Parallax>

    </main>
  )
}

export default Index
