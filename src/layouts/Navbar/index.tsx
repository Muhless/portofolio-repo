import Home from '@/pages';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Navbar() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/address')
    }
    return (
        <>
            <div className='flex justify-between'>
                <div>
                    <Image src="/images/Web.png"
                        alt='logo'
                        width={60}
                        height={80}
                        onClick={handleNavigation}
                    />
                </div>
                <div className='mt-3'>
                    <ul className='flex text-center'>
                        <li className='mr-8'><Link href="#">Homepage</Link></li>
                        <li className='mr-8'><Link href="/about">Tentang Saya</Link></li>
                        <li className='mr-8'><Link href="/project">Project</Link></li>
                        <li className='mr-8'><Link href="/address">Address</Link></li>
                        <li className='mr-8'><Link href="/contact">Kontak</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar