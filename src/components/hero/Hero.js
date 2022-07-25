import React, { useRef, useEffect } from 'react'
import './Hero.css'
import { Grid } from '@mui/material'
import { gsap } from "gsap";
import { FaAward, FaFire, FaArrowRight } from 'react-icons/fa'
import { FcIdea } from 'react-icons/fc'
import { GiTechnoHeart } from 'react-icons/gi'

const Hero = () => {
    const forthoseRef = useRef();
    useEffect(() => {
        // gsap.timeline({ repeat: -1 })
        //     .from(forthoseRef.current.children, {
        //         y: 30,
        //         opacity: 0,
        //         rotateX: -90,
        //         stagger: 3,
        //     })
        //     .to(forthoseRef.current.children, {
        //         y: -30,
        //         opacity: 0,
        //         rotateX: -90,
        //         stagger: 3,
        //     }, 3);
    });

    return (
        <div className='sm:pl-[100px] pt-[150px] h-[130vh] sm:h-[100vh]' style={{ position: 'relative' }}>
            <div className="px-[15px] sm:flex sm:overflow-hidden">
                <div>
                    <h1 className='hero_title 
                        font-black
                        sm:text-[60px]
                        text-[45px]
                        leading-[75px] 
                        gradient__text
                        text-center
                        sm:text-left
                        sm:w-[630px]'>We'll design <br /> and maintain your own unique websites!</h1>
                    <div className="text-[#ffffffd1] mt-[25px] flex">
                        <div style={{ minWidth: '110px' }}>
                            For those who
                        </div>
                        <div className="forthose" ref={forthoseRef} style={{ opacity: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>are striving for <b>quality</b> at all stages. </p>
                                <p><FaAward color='yellow' size={22} /></p>
                            </div>
                            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>believe in <b>beautiful software</b>.</p>
                                <p><FaFire color='red' size={22} /></p>
                            </div> */}
                            {/* <div className='sm:flex sm:items-center'>
                                <p className='hidden sm:block'>need <b>technology</b> to reveal the beauty of products believe in beautiful and smart design.</p>
                                <p><GiTechnoHeart color="blue" size={22} /></p>
                            </div> */}
                            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>need to build <b>complex</b> project.</p>
                                <p><FcIdea color='yellow' size={22} /></p>
                            </div> */}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex bg-red-500 p-3 rounded-3xl text-white font-bold mt-[110px] items-center' style={{}}>
                            <p>Enquire Now</p>
                            <div className='p-[5px] ml-[10px] bg-white rounded-full'>
                                <FaArrowRight color="black" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='mt-[90px]'>
                    <img src='./hero.svg' className='sm:w-[700px]' />
                </div>
            </div>
            <div className="divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div >
    )
}

export default Hero