import React from 'react'

const Contact = () => {
    return (
        <div style={{ background: '#F3F3F3', borderRadius: '28px', backgroundImage: "url(" + "/topography.svg" + ")", backgroundBlendMode: 'soft-light' }}
            className='lg:mx-[70px] mx-[25px] md:my-[150px] my-[100px] md:px-[40px] px-[10px] py-[20px]' >
            <p className='lg:text-[50px] md:text-[30px] text-[15px] font-semibold'>
                Let’s make something amazing together
                <br />
                Start by
                <span className='text-red-500 underline ml-[10px] cursor-pointer'>
                    saying hi
                </span>
            </p>
        </div >
    )
}

export default Contact