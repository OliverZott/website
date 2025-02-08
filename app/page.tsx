/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export default function Home() {

  return (
    <main>
      <Image
        className="bg-img"
        alt="mountain_wide"
        src="/hoell.webp"
        width={1920}
        height={1080}
        // srcSet="/hoell.webp 1920w, /hoell-900.webp 900w"
        sizes="(max-width: 900px) 900px, 1920px"
        layout="responsive"
      />
      <div className='container'>

        {/* <Blog posts={posts} /> */}

        <h1>Hello World</h1>
        <p style={{ padding: "0 0 2rem 0" }}>Just a little website to introduce myself. My name is <strong>Oliver</strong> and I am a <strong>Software Developer</strong> from Innsbruck (Austria).</p>

        <Image
          src="/helm.webp"
          width={420}
          height={300}
          alt="helm"
        />
      </div>
    </main>
  )
}
