import React from 'react'
import galeri1 from '../assets/images/image 4.svg'

function Testi() {
    return (
        <>
            <div className="w-full min-h-screen p-6">
                <h1 className="mt-[3rem] font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Testimonial</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <img src={galeri1} alt="" className='h-20 m-6' />
                        <h2 className="text-center px-2 pb-5 text-black">Database Support</h2>
                        <a href="#" className="bg-blue-500  p-3 text-center hover:bg-blue-800 transition-all duration-500">Contact Me</a>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <img src={galeri1} alt="" className='h-20 m-6' />
                        <h2 className="text-center px-2 pb-5 text-black">Email Support</h2>
                        <a href="#" className="bg-blue-500  p-3 text-center hover:bg-blue-800 transition-all duration-500">Contact Me</a>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <img src={galeri1} alt="" className='h-20 m-6' />
                        <h2 className="text-center px-2 pb-5 text-black">Chat Support</h2>
                        <a href="#" className="bg-blue-500  p-3 text-center hover:bg-blue-800 transition-all duration-500">Contact Me</a>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <img src={galeri1} alt="" className='h-20 m-6' />
                        <h2 className="text-center px-2 pb-5 text-black">Terminal Commands</h2>
                        <a href="#" className="bg-blue-500  p-3 text-center hover:bg-blue-800 transition-all duration-500">Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testi