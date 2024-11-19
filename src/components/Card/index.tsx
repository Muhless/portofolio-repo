import Image from 'next/image'
import React from 'react'

function CardProject() {
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center'>
                <div className=''>
                    <Image className=''
                        src='/images/landing-page/landing1.jpg'
                        width={400}
                        height={300}
                        alt='project landing page 1' />
                </div>
                <div className=''>
                    <Image className=''
                        src='/images/erp/erp1.png'
                        width={400}
                        height={300}
                        alt='project erp 1' />
                </div>
                <div className=' '>
                    <Image className=''
                        src='/images/marketplace/marketplace1.jpg'
                        width={400}
                        height={300}
                        alt='project shop 1' />
                </div>
                <div className="col-start-1 ">
                    <Image
                        src='/images/landing-page/landing2.jpg'
                        width={500}
                        height={500}
                        alt='project landing page 1' />
                </div>
                <div className='col-start-2  '>
                    <Image className=''
                        src='/images/erp/erp2.png'
                        width={400}
                        height={300}
                        alt='project erp 1' />
                </div>
                <div className='col-start-3  '>
                    <Image className=''
                        src='/images/marketplace/marketplace2.jpg'
                        width={400}
                        height={300}
                        alt='project shop 2' />
                </div>
            </div>
        </div>
    )
}

export default CardProject