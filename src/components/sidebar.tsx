import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faMap, faChevronDown, } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <div>
            <div className="p-6 ">
                <Link href="/dashboard" className="text-gray-600 text-3xl font-semibold uppercase flex justify-start items-center">
                    <Image src="/images/logo-bpbd.png" width={70} height={70} alt="Picture of the author" className='w-35' />
                </Link>
                <p className="mt-3 text-gray-600">DEWaS Control Center</p>
            </div>
            <div className="text-gray-600 text-base pt-3">
                <Link href="/dashboard" className={`flex items-center text-gray-600 p-2 m-2 rounded-lg nav-item ${pathname === '/dashboard' ? 'active-nav-link' : ''}`}>
                    <div className="flex">
                        <div className="mr-3">
                            {/* <FontAwesomeIcon icon={'table'} /> */}
                            <FontAwesomeIcon icon={faTable} />
                        </div>
                        Dashboard
                    </div>
                </Link>

                <Link href="/maps" className={`flex items-center text-gray-600 p-2 m-2 rounded-lg nav-item ${pathname === '/maps' ? 'active-nav-link' : ''}`}>
                    <div className="flex">
                        <div className="mr-3">
                            <FontAwesomeIcon icon={faMap} />
                        </div>
                        Maps
                    </div>
                </Link>
            </div>
            <div className="absolute w-full bottom-0 text-gray-600 py-4 pl-6 border-t border-gray-300">
                {/* <FontAwesomeIcon icon="fas fa-chevron-down mr-3"/> */}
                <div className="flex cursor-pointer">
                    <div className="mr-3">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    User
                </div>

            </div>
        </div>
    )
}
