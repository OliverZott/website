import Image from "next/image"

export default function Home() {

  return (
    <main>
      <div className="bg-img-wrapper">
        <Image
          className="bg-img"
          alt="mountain_wide"
          src="/hoell.webp"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 900px) 900px, 1920px"
          loading="eager"
        />
      </div>
      <div className='container'>

        {/* <Blog posts={posts} /> */}

        <h1>Hello World</h1>
        <p style={{ padding: "0 0 2rem 0" }}>Just a little website to introduce myself. My name is <strong>Oliver</strong> and I am a <strong>Software Developer</strong> from Innsbruck (Austria).</p>

        <Image
          src="/helm.webp"
          width={420}
          height={300}
          alt="helm"
          loading="eager"
        />
      </div>
    </main>
  )
}
