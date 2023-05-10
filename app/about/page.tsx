import Image from 'next/image';

export default function Hobbies() {
    return (
        <div>
            <div className="container" style={{ position: 'relative' }}>
                <h1>About Me</h1>
                <Image
                    src="/helm.jpg"
                    width={400}
                    height={433}
                    alt="Picture of the author"
                />
            </div>
        </div >
    )
}