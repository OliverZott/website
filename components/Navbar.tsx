import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <nav className="topnav">
                <div>
                    <Link className="active" href="/">Home</Link>
                    <Link href="/techstack">Tech-Stack</Link>
                    <Link href="/hobbies">Hobbies</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </header>)
}

export default Navbar;
