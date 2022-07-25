import React from 'react';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import { Grid } from '@mui/material'
import { BiLineChart } from 'react-icons/bi'
import { TbCircleSquare } from 'react-icons/tb'
import { GiWireframeGlobe } from 'react-icons/gi'
import './Aft.css'

const Aft = () => {
    return (
        <div>
            <div className='font-extrabold text-[30px]' style={{ textAlign: 'center' }}>
                <p>A few things<br />
                    we're <span className='aft_heading'>great at</span>
                </p>
            </div>
            <div style={{ position: 'relative' }}>
                <Grid container spacing={5} className="flex overflow-hidden pb-[100px] md:px-[66px] px-[20px] pt-[50px]">
                    <Grid item xs>
                        <Card className="aft_card" elevation={0}>
                            <p className='aft_card_heading'>Discover, Explore the Product</p>
                            <p className="mt-6 py-[25px]" style={{ backgroundImage: "url(" + "/blob.svg" + ")", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: '-30px' }}><BiLineChart size={70} /></p>
                            <div className='aft_bar' />
                            <p className="aft_card_sub uppercase">Discover, Explore & understanding the Product</p>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className="aft_card" elevation={0}>
                            <p className='aft_card_heading'>Modern Website Development</p>
                            <p className="mt-6 py-[25px]" style={{ backgroundImage: "url(" + "/blob2.svg" + ")", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}><GiWireframeGlobe size={70} /></p>
                            <div className='aft_bar' />
                            <p className="aft_card_sub uppercase">Listen to your needs & create a site that showcases your brand what sets you apart</p>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className="aft_card" elevation={0}>
                            <p className='aft_card_heading'>Product UX, Design & Development</p>
                            <p className="mt-6 py-[25px]" style={{ backgroundImage: "url(" + "/blob1.svg" + ")", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}><TbCircleSquare size={70} /></p>
                            <div className='aft_bar' />
                            <p className="aft_card_sub uppercase">DIGITAL PRODUCT UX, DESIGN and DEVELOPMENT</p>
                        </Card>
                    </Grid>
                </Grid>
                <img style={{ position: 'absolute', top: '50%', zIndex: '-1' }} src='./points_bg.png' />
            </div>
        </div>
    )
}

export default Aft