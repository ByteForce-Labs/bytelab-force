import React, { useRef, useEffect, useReducer } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import Layout from '@/layout/Layout'
import MainLayout from '@/layout/MainLayout'
import Footer from '@/layout/Footer'
import HeadComp from '@/layout/Head'

const Index = () => {
    const One = useRef();
	const Two = useRef();
	const Three = useRef();

    const header = useRef()
    const parallaxRef = useRef()
    const reducer = (state, action) => {
		switch (action.type) {
			case "IconOne":
				return { ...state, iconOne: !state.iconOne };
			case "IconTwo":
				return { ...state, iconTwo: !state.iconTwo };
			case "IconThree":
				return { ...state, iconThree: !state.iconThree };
		}
	};
	const [state, dispatch] = useReducer(reducer, {
		iconOne: false,
		iconTwo: false,
		iconThree: false,
		iconFour: false,
		iconFive: false,
		iconSix: false,
		isLoggedIn: false,
	});
    const svgOne = () => {
		return <Image src="/Images/plus.svg" height={31} width={31} alt="plus" />;
	};
	const svgTwo = () => {
		return <Image src="/Images/minus.svg" height={31} width={31} alt="minus" />;
	};
    const revealData = (value) => {
		value.current.classList.toggle("full-data");
	};
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
            <MainLayout header={header}/>
            <Parallax 
                ref={parallaxRef} 
                pages={7}>
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
                <ParallaxLayer
                    offset={5}
                    className="bg-white"
                >
                    <section className="h-fit bg-white pb-5">
                        <div className="mx-auto w-[80%]">
                            <h3 className="font-EuclidCircularA text-black text-3xl font-[500] mb-[2rem]">
                                FAQ
                            </h3>
                            <div className="w-[90%] md:w-full mx-auto text-black p-[1rem] md:p-[0] rounded-[8px] space-y-[2rem]">
                                <div
                                    ref={One}
                                    className=" overflow-hidden relative border-[1px] rounded-[5px] shadow-md p-2 mx-auto space-y-[1rem]"
                                >
                                    <div className=" flex justify-between items-center border-b-2">
                                        <h3 className="font-EuclidCircularA font-bold my-2">Why Choose Byte Force?</h3>
                                        <button
                                            onClick={() => dispatch({ type: "IconOne" }, revealData(One))}
                                            className=" h-5 w-5"
                                        >
                                            {state.iconOne ? svgTwo() : svgOne()}
                                        </button>
                                    </div>
                                    <p className="font-spaceGrotesk duration-500 md:translate-y-[-33rem] translate-y-[-23rem] absolute">
                                        Unmatched Web 3 Expertise: At Byte Force, we thrive on pushing the boundaries of technology. Our team of experienced developers is well-versed in the latest web 3 protocols and technologies, ensuring that your projects are at the forefront of innovation. <br /><br />
                                        Comprehensive Language Support: Our coding lab boasts expertise in a wide range of web 3 languages. From the solidity language used in Ethereum smart contracts to Rust for secure and efficient decentralized applications, and from React for interactive user interfaces to Next.js for server-side rendering, we have you covered. Whatever your project demands, we have the skills and knowledge to deliver exceptional results <br /><br />
                                        Proven Track Record: Trust is paramount in the web 3 space, and we take it seriously. With numerous successful projects under our belt, we have earned a reputation for delivering high-quality solutions that exceed client expectations. Our attention to detail, rigorous testing, and dedication to best practices ensure that every line of code we produce is of the highest caliber. <br /><br />
                                        Tailored Solutions: We understand that every project is unique, which is why we take a personalized approach. Our team collaborates closely with you to understand your specific needs, goals, and constraints. By combining our technical expertise with your vision, we create tailor-made solutions that perfectly align with your requirements.
                                    </p>
                                </div>
                                <div
                                    ref={Two}
                                    className=" overflow-hidden relative border-[1px] rounded-[5px] shadow-md p-2 mx-auto space-y-[1rem]"
                                >
                                    <div className=" flex justify-between items-center border-b-2">
                                        <h3 className="font-EuclidCircularA font-bold my-2">How We Can Help You</h3>
                                        <button
                                            onClick={() => dispatch({ type: "IconTwo" }, revealData(Two))}
                                            className=" h-5 w-5"
                                        >
                                            {state.iconTwo ? svgTwo() : svgOne()}
                                        </button>
                                    </div>
                                    <p className="font-spaceGrotesk duration-500 md:translate-y-[-33rem] translate-y-[-23rem] absolute">
                                        Smart Contract Development: Solidity is the language of the blockchain, and we are masters at crafting secure and efficient smart contracts. Whether you need to deploy a decentralized application, create a custom token, or develop complex decentralized systems, our experts will guide you every step of the way. <br /> <br />
                                        Decentralized Application (DApp) Development: With our expertise in Rust, React, and Next.js, we can bring your DApp ideas to life. From intuitive user interfaces to seamless integration with blockchain networks, we build DApps that deliver exceptional user experiences and maximize the potential of web 3 technologies. <br /> <br />
                                        Consultation and Technical Advice: Need guidance in navigating the web 3 landscape? Our team of experts is here to help. We offer consultation services to help you make informed decisions, overcome challenges, and strategize your web 3 journey. Leverage our knowledge and experience to gain a competitive edge in this rapidly evolving domain.

                                    </p>
                                </div>
                                <div
                                    ref={Three}
                                    className=" overflow-hidden relative border-[1px] rounded-[5px] shadow-md p-2 mx-auto space-y-[1rem]"
                                >
                                    <div className=" flex justify-between items-center">
                                        <h3 className="font-EuclidCircularA font-bold my-2">Join the Byte Force Revolution:</h3>
                                        <button
                                            onClick={() => dispatch({ type: "IconThree" }, revealData(Three))}
                                            className=" h-5 w-5"
                                        >
                                            {state.iconThree ? svgTwo() : svgOne()}
                                        </button>
                                    </div>
                                    <p className="font-spaceGrotesk duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                                        Embark on your web 3 journey today and unlock the full potential of decentralized technologies with Byte Force. Contact us now to discuss your project, explore how we can add value to your business, and witness firsthand the exceptional results we deliver. <br /> <br />

                                        Together, let's shape the future of the web!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={6}
                    className= ""
                    sticky={{
                        start: 6.9, 
                        end: 6.9
                    }}
                >
                    <Footer />
                </ParallaxLayer>
            </Parallax>

        </main>
    </>
  )
}

export default Index
