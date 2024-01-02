'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Links = () => {
    const pathname = usePathname();
    // console.log(pathname);
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        
    ];
    // Temporary it will be change
    const session = true;
    const isAdmin = true;
    return (
        <div className='flex flex-col lg:flex lg:flex-row gap-10 items-center'>
            {links.map(link => (
                <Link 
                href={link.path}
                key={link.title}
                className={`${pathname === link.path ? 'bg-white text-black py-1 px-3 rounded-xl' : ''}`}>
                {link.title}     
                </Link>
            ))}{
                session ? (
                    <> { isAdmin && <Link 
                        className={`${pathname === "/admin" ? 'bg-white text-black py-1 px-3 rounded-xl' : ''}`}
                    href="/admin">Admin</Link>}
                    <button 
                     className="bg-red-500 text-white py-1 px-3 rounded-xl"
                    >Logout</button>
                </>
                ) : (
                    <Link href="/login">Login</Link>
                    
                )
            }
        </div>
    );
};

export default Links;