import React from 'react'

function About() {
    return (
        <>
            <h1 className=' text-2xl text-center p-[3rem] font-bold'>Transportasi Yang Support di Perusahaan Kami</h1>
            <div className='text-center text-7xl lg:text-9xl'>
                <a href="" className='hover:text-cyan-700 m-2'><ion-icon name="boat-outline"></ion-icon></a>
                <a href="" className='hover:text-slate-800 m-2'><ion-icon name="airplane-outline"></ion-icon></a>
                <a href="" className='hover:text-lime-600 m-2'><ion-icon name="subway-outline"></ion-icon></a>
                <a href="" className='hover:text-teal-700 m-2'><ion-icon name="car-outline"></ion-icon></a>
            </div>
            <article>
                <h1 className='text-center mt-[3rem] font-extrabold lg:text-5xl'>APA YANG KAMI UNGGULKAN ??</h1>
                <p className='text-center p-[1rem]'>Ada banyak hal yang kami perkirakan seblum anda mulai membeli tiket di web kami tidak hanyak desain dan tampilan melankan dari segi enskripsi keamaan akun dan keamanan dalam melkukan transaksi dan itu adalah priotas kami </p>
            </article>
        </>
    )
}

export default About

