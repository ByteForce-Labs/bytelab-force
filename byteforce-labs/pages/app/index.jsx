import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Index = () => {
  return (
    <main className="main-bg bg-[#000] h-[100vh]">
        <Parallax pages={4}>
            <ParallaxLayer 
                speed={-1}
                offset={0}
                style={{
                    backgroundImage: `url(/Images/hero.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
            </ParallaxLayer>
            <ParallaxLayer 
                speed={-2}
                offset={0} 
                style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }}>
                <h2 className=" font-poppins text-[3rem] text-black text-center">Web3 Builder</h2>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                style={{
                    backgroundColor: "#fff"
                }}
            >
                <p className="w-[60%] mx-auto font-spaceGrotesk text-[1.6rem] font-[700] mt-[15%]">Byteforce Labs is a Lagos-based web development agency that specializes in creating custom websites and applications for businesses mostly for web3. Our team of experienced developers and designers work closely with clients to deliver high-quality solutions that meet their unique needs.</p>
            </ParallaxLayer>
        </Parallax>

    </main>
  )
}

export default Index
