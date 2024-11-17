import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between'>
                <div>
                    <Link href="/Contact">
                        <Image src="/images/Web.png"
                            alt='logo'
                            width={60}
                            height={80}
                        />
                    </Link>
                </div>
                <div className='mt-3'>
                    <ul className='flex text-center'>
                        <li className='mr-8'><Link href="#">Homepage</Link></li>
                        <li className='mr-8'><Link href="/About">About Me</Link></li>
                        <li className='mr-8'><Link href="/Project">Project</Link></li>
                        <li className='mr-8'><Link href="/Address">Address</Link></li>
                        <li className='mr-8'><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar