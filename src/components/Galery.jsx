import React from 'react'
import galeri1 from '../assets/images/image 4.svg'
import galeri2 from '../assets/images/image 5.svg'
import galeri4 from '../assets/images/image 7.svg'
import galeri5 from '../assets/images/image 8.svg'

function Galery() {
    return (
        <>
            <h1 className='text-center text-4xl mt-[2rem] lg:text-6xl'>Galery</h1>
            <div className='container  p-14 lg:grid grid-rows-2 grid-flow-col gap-4'>
                <img src={galeri1} alt="" className='rounded-lg lg:mt-[2.4rem]' />
                <img src={galeri2} alt="" className='mt-[2rem] rounded-lg ' />
                <img src={galeri4} alt="" className='mt-[2rem] rounded-lg' />
                <img src={galeri4} alt="" className='mt-[2rem] rounded-lg' />
                <img src={galeri5} alt="" className='mt-[2rem] rounded-lg' />
                <img src={galeri5} alt="" className='mt-[2rem] rounded-lg' />
            </div>
        </>
    )
}

export default Galery