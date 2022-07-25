import React from 'react'

const Contact = () => {
    return (
        <div style={{ background: '#F3F3F3', borderRadius: '28px',backgroundImage: "url(" + "/topography.svg" + ")", backgroundBlendMode: 'soft-light' }} className='sm:mx-[70px] mx-[25px] sm:my-[150px] my-[100px] sm:px-[40px] px-[10px] py-[20px]' >
            <p className='sm:text-[50px] text-[15px] font-semibold'>
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