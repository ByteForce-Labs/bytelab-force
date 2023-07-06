import { useEffect, useRef } from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MainLayout from "@/layout/MainLayout"
import HeadComp from "@/layout/Head"
import Footer from "@/layout/Footer"

const Work = () => {
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
        <HeadComp title="Byteforce Labs - Work"/>
        <main className="work-bg bg-[#000]">
            <MainLayout header={header}/>
            <Parallax 
                ref={parallaxRef} 
                pages={8}>
                <ParallaxLayer 
                    offset={0}
                    sticky={{
                        start: 0,
                        end: 0.85,
                    }}
                    style={{
                        background: "white",
                        zIndex: "-2"
                    }}>
                </ParallaxLayer>
                <ParallaxLayer 
                    speed={-2}
                    offset={0} 
                    className="flex items-center pl-[3rem] z-[-2]">
                    <h2 className="wow bounceInDown font-poppins text-[3rem] text-black">
                        Reduce your 
                        <p className=" ml-[5rem]">
                            Expectations to zero 
                        </p>
                    </h2>
                </ParallaxLayer>
                <ParallaxLayer
                    className="flex items-center pl-[3rem]"
                    offset={1}
                    sticky={{
                        start: 1,
                        end: 1.85
                    }}
                    style={{
                        backgroundImage: "url(/Images/space.jpg)",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
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
                    offset={2}
                    className="curved-bottom z-[1]"
                >

                </ParallaxLayer>
                <ParallaxLayer
                    offset={7}
                    className= "text-white z-[-1]"
                >
                    <Footer />
                    
                </ParallaxLayer>
            </Parallax>

        </main>
    </>
  )
}

export default Work
