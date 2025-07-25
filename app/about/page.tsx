/* eslint-disable @next/next/no-img-element */

export default function About() {

    var packageJson = require('../../package.json');

    var nextVersion = packageJson.dependencies.next.slice(1,)
    var version = packageJson.version;

    return (
        <main>
            <img
                className="bg-img"
                alt="mountain3_wide"
                src="/lacke.webp"
                srcSet="/lacke.webp 1920w, /lacke-900.webp 900w"
            />
            <div className='container'>

                <h1>About</h1>
                <p>&copy; 2025 Oliver Zott</p>

                <div className="dist">
                    <p>
                        <strong>E-Mail: </strong>
                        <a href="mailto:zott_oliver@web.de?subject=website&body=Message">zott_oliver@web.de</a>
                    </p>

                    <p>
                        <strong>Github: </strong>
                        <a href="https://github.com/OliverZott" target="_blank" rel="noopener noreferrer">https://github.com/OliverZott</a>
                    </p>

                    {/* <p>
                    <strong>CV: </strong>
                    <a href="/test.pdf" target="_blank">Open PDF</a>
                    </p> */}
                </div>

                <div className="dist">
                    <h4 >Photos:</h4>
                    <p>Home: <q>Mieminger Kette - Hölltörl</q></p>
                    <p>Tech-Stack: Stubaier Alps - <q>Pfaffenhofer Alm</q></p>
                    <p>Hobbies: Ötztaler Alps - <q>Hintere Fundusalm</q> </p>
                    <p>About: Stubaier Alps - <q>Sulzenauhütte</q> </p>
                </div>

                <div className="dist">
                    <p><strong>Last updated: </strong>2025-07-25</p>
                    <p><strong>Next.js version: </strong>{nextVersion}</p>
                </div>

            </div>
        </main>
    )
}