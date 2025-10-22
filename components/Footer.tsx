import Image from "next/image";


const Footer = () => {
    return (
        <header>
            <footer className="footer-container">

                <div className="social-icons">
                    <a href="https://github.com/OliverZott">
                        <Image src="/logos/github.png" alt="GitHub" width={24} height={24} />
                    </a>
                    <a href="https://www.instagram.com/olli_velosaurus/">
                        <Image src="/logos/instagram.png" alt="Instagram" width={24} height={24} />
                    </a>
                </div>

                <div className="about-link">
                    <a href="/about">About</a>
                </div>

            </footer>
        </header>)
}

export default Footer;
