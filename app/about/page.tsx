/* eslint-disable @next/next/no-img-element */

export default function About() {
    return (
        <main>
            <img alt="mountain3_wide" src="/lacke.jpg" className="bg-img" />
            <div className='container'>
                <h1>About</h1>

                <p>&copy; 2023 Oliver Zott</p>

                <p>
                    <strong>E-Mail: </strong>
                    <a href="mailto:csak1247@uibk.ac.at?subject=website&body=Message">csak1247@uibk.ac.at</a>
                </p>
                <p>
                    <strong>Github: </strong>
                    <a href="https://github.com/OliverZott" target="_blank" rel="noopener noreferrer">https://github.com/OliverZott</a>
                </p>

                <h4 className="dist">Photos:</h4>
                <p>Home: <q>Mieminger Kette - Hölltörl</q></p>
                <p>Tech-Stack: Stubaier Alps - <q>Pfaffenhofer Alm</q></p>
                <p>Hobbies: Ötztaler Alps - <q>Hintere Fundusalm</q> </p>
                <p>About: Stubaier Alps - <q>Sulzenauhütte</q> </p>

            </div>
        </main>
    )
}