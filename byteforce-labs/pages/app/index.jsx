import React, { useRef, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import Layout from '@/layout/Layout'
import MainLayout from '@/layout/MainLayout'
import Footer from '@/layout/Footer'
import HeadComp from '@/layout/Head'

const Index = () => {
    const header = useRef()
    const parallaxRef = useRef()
    useEffect(() =>{
        var parallaxVarGet = parallaxRef.current.container.current
        parallaxVarGet.addEventListener("scroll", () => {
            header.current.classList.toggle("header-sticky", parallaxVarGet.scrollTop > 0)
        })
    }, [])
  return (
    <>
        <HeadComp title="Byteforce Labs - Home"/>
        <main className="main-bg bg-[#000] h-[100vh]">
            <Parallax 
                ref={parallaxRef} 
                pages={5}>
                <ParallaxLayer 
                    className=""
                    sticky={{start:0, end: 4}}
                >
                    <MainLayout header={header}/>
                </ParallaxLayer>
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
                    <h2 className="wow bounceInDown font-poppins text-[3rem] text-black">Web3 Builder</h2>
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
                            <button className="border-[2px] transition-[.5s] hover:bg-[#808080] border-black rounded-[5rem] py-[10px] px-[1rem]">LEARN MORE</button>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    className="curved-top"
                    offset={3}
                >    
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    className="mt-[9rem]"
                >
                    <h3 className="font-poppins text-[3rem] pl-[4rem] font-bold">We're</h3>
                    <p className="font-poppins text-[3rem] ml-[10rem]">built different.</p>
                    <div className=" flex gap-4 overflow-x-auto mt-[4rem]">
                        <div className="mt-[3rem]">
                            <Image src="/Images/image-herotwo.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                        <div className="">
                            <Image src="/Images/image-hero-four.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                        <div className="mt-[3rem]">
                            <Image src="/Images/image-herotwo.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                        <div className="">
                            <Image src="/Images/image-hero-four.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                        <div className="mt-[3rem]">
                            <Image src="/Images/image-herotwo.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                        <div className="">
                            <Image src="/Images/image-hero-four.svg" height={1} width={250} alt="LandingImg" />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    className="bg-white"
                >
                    <p className="w-[60%] mx-auto font-spaceGrotesk text-[1.6rem] font-[600] mt-[15%]">
                        At Byteforce Labs , we pride ourselves on our ability to deliver projects on time and within budget. We believe in transparency and open communication, which is why we keep our clients informed throughout the entire development process. Contact us today to learn how we can help your business succeed online.
                    </p>
                </ParallaxLayer>
                <Footer />
            </Parallax>

        </main>
    </>
  )
}

export default Index
