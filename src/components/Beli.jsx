import React from 'react'
import galeri1 from '../assets/images/logo1.png'

function Beli() {
    return (
        <>
            <h1 className='text-2xl font-bold text-center mt-[3rem] hover:text-cyan-600'>Website Resmi</h1>
            <div className='lg:flex'>
                <div className=' lg:mx-20 my-20'>
                    <h1 className='mt-[3rem] text-center m-[1rem]'>Banyak yang mengaku Website Resmi dari MecTech oleh karna itu anda jangan mudah terpercaya dengan sales yang menjual dengan no selain +6282243520156. untuk memberikan anda kepercayaan anda perlu memastiakan bahwa webkami hanya meggunakan logo yang berlambangkan huruf D</h1>
                </div>
                <img src={galeri1} alt="" className='h-[10rem] mx-auto mt-[3rem] lg:mr-[20rem]' />
            </div>
        </>
    )
}

export default Beli