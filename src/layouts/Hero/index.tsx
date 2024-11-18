import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <>
                <div className='flex flex-row h-screen'>
                    <div className='flex flex-col justify-center items-center bg-dark-blue w-2/5'>
                        <p className=''>Hallo, Saya</p>
                        <p className='my-5 text-7xl'>Muhta Nuryadi</p>
                        <p>Junior Frontend Web Developer</p>
                    </div>
                    <div className='flex justify-center items-center bg-dark-blue w-3/5'>
                        <Image
                        src='/images/github.jpg'
                        width={400}
                        height={100}
                        alt='profile image'/>
                    </div>
                </div>
        </>
    )
}

export default Hero