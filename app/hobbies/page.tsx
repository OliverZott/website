/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hobbies() {
    return (
        <main>
            <img className="bg-img" alt="mountain4_wide" src="/mountain4_wide.jpg" />
            <div className='container'>
                <h1>What I do in my spare time</h1>
                <Image
                    src="/hike.jpg"
                    width={600}
                    height={450}
                    alt="hike"
                />
                <Image
                    src="/hike2.jpg"
                    width={600}
                    height={651}
                    alt="hike2"
                />
                <Image
                    src="/bike1.jpg"
                    width={600}
                    height={555}
                    alt="bike1"
                />
                <Image
                    src="/bike3.jpg"
                    width={600}
                    height={450}
                    alt="bike3"
                />
                <Image
                    src="/bike2.jpg"
                    width={600}
                    height={800}
                    alt="bike2"
                />
                <Image
                    src="/ski1.jpg"
                    width={600}
                    height={555}
                    alt="ski1"
                />
            </div>
        </main>
    );
}