import React from 'react'
import { Grid, Card } from '@mui/material'
import { GiCycle } from 'react-icons/gi'
import { FaShapes } from 'react-icons/fa'
import { BiGitCompare } from 'react-icons/bi'
import { GrVmMaintenance } from 'react-icons/gr'
import './Wsy.css'

const Wsy = () => {
    return (
        <div style={{ position: 'relative' }} className="md:px-[70px] px-[25px]">
            <div className='lg:flex' style={{}}>
                <div>
                    <div className='wsy_bar' />
                    <p className='font-extrabold text-[38px] lg:min-w-[295px] leading-[48px]' style={{}}>Why should you choose Gurans Soft. Tech.?</p>
                </div>
                <p className='text-[14px] flex pt-[25px] lg:pt-0 lg:pl-[142px]' style={{ alignItems: 'center', lineHeight: '25px' }}>We take great pride in what we do. To make your company stand out, our designers remain on top of the latest trends to produce appealing and user-friendly website designs. In order for your website to stand the test of time, our engineers are devoted to upholding the highest online standards. We cooperate with you because we care about your company. We have expertise in creating new digital projects from start as well as modernizing older ones.</p>
            </div>
            <div style={{ display: 'flex', position: 'relative', overflow: 'hidden' }}>
                <Grid container spacing={5} className="" style={{ marginTop: '60px', maxWidth: '657px' }}>
                    <Grid item xs>
                        <Card className="wsy_card" elevation={0}>
                            <GiCycle size={60} />
                            <p className='wsy_card_heading mt-6'>A flexible group of programmers</p>
                            <p className="wsy_card_sub">A dedicated team from our digital product firm, working solely on your project, with no micromanagement and all communications going through the team leader who handles problem-solving and product delivery</p>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className="wsy_card" elevation={0}>
                            <FaShapes size={60} />
                            <p className='wsy_card_heading mt-6'>Exceptional designers and the development team collaborate</p>
                            <p className="wsy_card_sub">We are interested in the project's front-end appearance and design. Beautiful software is something we believe in as a digital product development company.</p>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className="wsy_card" elevation={0}>
                            <BiGitCompare size={60} />
                            <p className='wsy_card_heading mt-6'>Our method for creating products is precise</p>
                            <p className="wsy_card_sub">Using the abilities of our diverse team, we will assist you in overcoming the most difficult obstacles as you embark on the thrilling product development adventure.</p>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className="wsy_card" elevation={0}>
                            <GrVmMaintenance size={60} />
                            <p className='wsy_card_heading mt-6'>Including it in a current project or beginning a new one</p>
                            <p className="wsy_card_sub">We thrive in a situation when we have to start our work ASAP. The systems we put in place enable us to complete any job without difficulty</p>
                        </Card>
                    </Grid>
                </Grid>
                <img className='wsy_img sm:hidden lg:flex' src='./wsy_img.svg' />
            </div>
        </div>
    )
}

export default Wsy