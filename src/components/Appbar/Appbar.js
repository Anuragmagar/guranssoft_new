import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import { BiMenuAltRight } from 'react-icons/bi';
import './Appbar.css'


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        className: trigger ? 'glass' : 'glass_not'
    });
}

export default function Appbar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar color='transparent' className="px-[50px]" elevation={0}>
                    <Toolbar className='flex justify-between z-[999] p-[15px]'>
                        <img src='/logo-banner.png' style={{ height: '64px', zIndex: '999' }} />
                        <ul className='sm:flex hidden'>
                            <li className='appbar_list cursor-pointer hover:font-black hover:text-red-200'>Home</li>
                            <li className='appbar_list cursor-pointer hover:font-black hover:text-red-200'>About Us</li>
                            <li className='appbar_list cursor-pointer hover:font-black hover:text-red-200'>Contact Us</li>
                            <li className='appbar_list cursor-pointer hover:font-black hover:text-red-200'>FAQ</li>
                        </ul>
                        <a href="#" className='sm:visible sm:bg-red-500 sm:p-3 sm:rounded sm:text-white hidden'>eStock Login</a>
                        <div className='sm:hidden'>
                            <BiMenuAltRight color='white' size={30} />
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    )
}
