/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <img className="bg-img" alt="mountain_wide" src="/mountain_wide.jpg" />
      <div className='container'>
        <h1>About</h1>
        <p>Just a littel website to introduce myself. My name is <strong>Oliver</strong> and I am a <strong>Software Developer</strong> from Innsbruck (Austria).</p>

        <Image
          src="/helm.jpg"
          width={420}
          height={300}
          alt="helm"
        />
      </div>

    </main>
  )
}
