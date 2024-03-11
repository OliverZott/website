'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const pathname = usePathname()

    return (
        <header>
            <nav className="topnav">
                <div>
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                    <Link className={`link ${pathname === '/techstack' ? 'active' : ''}`} href="/techstack">Tech-Stack</Link>
                    <Link className={`link ${pathname === '/hobbies' ? 'active' : ''}`} href="/hobbies">Hobbies</Link>
                    <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                </div>
            </nav>
        </header>)
}

export default Navbar;
