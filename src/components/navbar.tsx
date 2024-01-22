import Link from 'next/link'
import React, { use } from 'react'
import { usePathname } from 'next/navigation'
import { stat } from 'fs';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const pathname = usePathname();
    return (
        <div>
            {/* <!-- Desktop Header --> */}
            <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                <div className="flex">
                    <div className="mr-3">
                        <button onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <h1 className="text-lg text-gray-600 font-semibold ml-2">
                        {pathname === '/dashboard' ? 'Dashboard' : ''}
                        {pathname === '/maps' ? 'Maps' : ''}
                        {/* Dashboard */}
                        {/* Dashboard */}
                    </h1>
                </div>
                <div x-data="{ isOpen: false }" className="relative w-1/2 h-10 flex justify-end">
                </div>
            </header>

            {/* <!-- Mobile Header & Nav --> */}
            <header x-data="{ isOpen: false }" className="w-full bg-white py-2 px-6 sm:hidden">

                <div x-data="{ isOpen: true }" className="relative w-1/2 h-10 flex justify-start items-center">
                    <div className="flex">
                        <div className="mr-3">
                            <button onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
                        </div>
                        <h1 className="text-lg text-gray-600 font-semibold ml-2">
                            {pathname === '/dashboard' ? 'Dashboard' : ''}
                            {pathname === '/maps' ? 'Maps' : ''}
                            {/* Dashboard */}
                        </h1>
                    </div>
                </div>
            </header>

            <div className="w-full overflow-x-hidden border-t flex flex-col">

            </div>

        </div>
    );
};

export default Navbar;

