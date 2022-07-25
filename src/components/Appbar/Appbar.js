import React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { SwipeableDrawer } from '@mui/material';
import './Appbar.css'
import { Box } from '@mui/system';


function ElevationScroll(props) {
    const { children, window } = props;
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

    const [isSideOpen, setIsSideOpen] = useState(false);

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar color='transparent' className="px-[50px] md:px-[40px]" elevation={0}>
                    <Toolbar className='flex justify-between z-[999] p-[15px]'>
                        <img src='/logo-banner.png' style={{ height: '64px', zIndex: '999' }} />
                        <ul className='lg:flex hidden'>
                            <li className='appbar_list cursor-pointer hover:font-black'>Home</li>
                            <li className='appbar_list cursor-pointer hover:font-black'>About Us</li>
                            <li className='appbar_list cursor-pointer hover:font-black'>Contact Us</li>
                            <li className='appbar_list cursor-pointer hover:font-black'>FAQ</li>
                        </ul>
                        <a target={'_blank'} href="https://www.estock.guranssoft.com.np" className='lg:flex md:bg-red-500 md:p-3 md:rounded md:text-white hidden'>eStock Login</a>
                        <div className='lg:hidden'>
                            <BiMenuAltRight color='white' onClick={() => setIsSideOpen(true)} size={30} />

                            <SwipeableDrawer
                                anchor='right'
                                open={isSideOpen}
                                onOpen={() => setIsSideOpen(true)}
                                onClose={() => setIsSideOpen(false)}
                            >
                                <Box role="presentation">
                                    <div className='px-[60px] text-white  gradient__bg h-[100vh]'>
                                        <div className="flex text-white justify-end pt-[60px]">
                                            <MdClose color='white' onClick={() => setIsSideOpen(false)} size={30} />
                                        </div>

                                        <ol className='pt-[80px]'>
                                            <li className='cursor-pointer pb-[20px]'>Home</li>
                                            <li className='cursor-pointer pb-[20px]'>About Us</li>
                                            <li className='cursor-pointer pb-[20px]'>Contact Us</li>
                                            <li className='cursor-pointer pb-[20px]'>FAQ</li>
                                            <li className='cursor-pointer mt-[20px]'>
                                                <a target={'_blank'} href="https://www.estock.guranssoft.com.np" className='bg-red-500 p-3 mt-[20px] rounded text-white'>eStock Login</a>
                                            </li>
                                        </ol>
                                    </div>
                                </Box>
                            </SwipeableDrawer>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}
