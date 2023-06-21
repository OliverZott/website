/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hobbies() {
    return (
        <main>
            <img className="bg-img" alt="fundusalm" src="/fundusalm.jpg" />
            <div className='container'>
                <h1>What I do in my spare time</h1>


                <h2>Hiking</h2>

                <p>
                    <q>Blaue Lacke </q>- Stubai Alps (2.289m)
                </p>
                <Image
                    src="/hike.jpg"
                    width={600}
                    height={450}
                    alt="hike"
                />

                <p>Ben Vrackie - Scotland (841m)</p>
                <Image
                    src="/hike2.jpg"
                    width={600}
                    height={651}
                    alt="hike2"
                />


                <h2>Mountainbike</h2>
                <p>Stubai Alps - Tribulaun (2.369m)</p>
                <Image
                    src="/bike1.jpg"
                    width={600}
                    height={555}
                    alt="bike1"
                />

                <p>Carnic Alps - On the way to the Sillianer Hut (2.447m)</p>
                <Image
                    src="/bike3.jpg"
                    width={600}
                    height={450}
                    alt="bike3"
                />

                <p>Nordkette - Innsbruck</p>
                <Image
                    src="/bike2.jpg"
                    width={600}
                    height={800}
                    alt="bike2"
                />

                <h2>Skiing</h2>
                <p>Mieming Range - On the way to the <q>Wankspitze</q> </p>
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