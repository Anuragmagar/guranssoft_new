import React from 'react'
import './Footer.css'
import { RiHandHeartFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div>
            <div className='px-[60px] text-white'>
                <div className="footer md:flex justify-between py-10 ">
                    <div >
                        <img width="200px" src='./logo-banner.png' />
                    </div>
                    <div className='mt-[40px] md:mt-0'>
                        <h4>Links</h4>
                        <p>Social Media</p>
                        <p>Contact</p>
                    </div>
                    <div >
                        <h4>Company</h4>
                        <p>Terms & Conditions </p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div >
                        <h4>Get in touch</h4>
                        <p>Bokse, Gaighat, Udayapur</p>
                        <p>guranssoft@gmail.com</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', width: '100%', color: 'white', backgroundColor: '#03152B', fontSize: '12px', padding: '10px 0', alignItems: 'center', justifyContent: 'center' }} className="flex ">
                <p className='mr-2'>&copy; 2021 Gurans Soft. Tech. Made with</p>
                <RiHandHeartFill color='red' size={20} />
                <p className="ml-2"> in Nepal. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer