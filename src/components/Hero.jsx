import React from 'react'
import images from '../assets/images/makan.svg'

function Hero() {
    return (
        <>
            <div className="w-full h-[32rem] bg-cover opacity-60 bg-black" style={{ backgroundImage: `url(${images})` }}>
                {/* <span className="w-full h-full absolute opacity-75 bg-black"></span> */}
                <h1 className='text-center pt-[15rem] text-2xl font-bold lg:text-4xl'>Mau beli Tiket</h1>
                <h1 className='text-center font-semibold lg:text-3xl mt-5'> Semua Akan mudah jika anda membelinya di sini </h1>
                <div className='mt-4 text-center animate-bounce text-purple-800 text-2xl'>
                    <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
                <button className="relative inline-flex ml-[11.9rem]  mt-3 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 lg:ml-[31rem] 2xl:ml-[44rem]">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        See All Tiket
                    </span>
                </button>
            </div >
        </>
    )
}

export default Hero