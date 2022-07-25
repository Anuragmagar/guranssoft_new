import React from 'react'
import './Wbm.css'
import { FaReact, FaLaravel } from 'react-icons/fa'
import { RiVuejsFill } from 'react-icons/ri'
import { SiPhp } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

const Wbm = () => {
    return (
        <div className='md:px-[70px] px-[25px]'>
            <div className="lg:flex" style={{ marginTop: '60px' }}>
                <div>
                    <div className='wbm_bar' />
                    <p className='font-extrabold text-[38px]' style={{ lineHeight: '48px' }}>We build more than just experiences</p>

                    <p className='text-[14px] mt-[50px]' style={{ lineHeight: '24px' }}>
                        Gurans Soft. Tech. is a well-known web development and design firm in Nepal. We offer top-notch services in these areas. We'll show you how to create user experiences and interfaces using the best practices. Our services will bring your
                    </p>
                </div>
                <div className='lg:ml-[84px] lg:pt-[53px]'>
                    <p className='text-[14px]' style={{ lineHeight: '24px' }}>
                        customers closer to your goods and services while seamlessly integrating into your company environment.
                    </p>
                    <p className='text-[14px] mt-[17px]' style={{ lineHeight: '24px' }}>
                        Gurans Soft. Tech.  is a leading web design and digital marketing firm in Nepal that offers full online solutions, such as web design, responsive web design, website development, and e-commerce. creation of websites, creation of unique websites, and SEO. With their extensive training and expertise in web design, our highly certified and skilled website designers create original designs. With skill and at a competitive price, we produce websites on schedule.
                    </p>
                    <div className="flex text-[60px] justify-between mt-[25px]">
                        <FaReact color='#61DAFB' />
                        <RiVuejsFill color='#42B883' />
                        <SiPhp color='#8892BF' />
                        <SiMysql color='#3E6E93' />
                        <FaLaravel color='#F9322C' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wbm