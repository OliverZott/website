/* eslint-disable @next/next/no-img-element */

export default function About() {
    return (
        <main>
            <img alt="mountain3_wide" src="/mountain3_wide.jpg" className="bg-img" />
            <div className='container'>
                <h1 style={{ padding: '0 0 2rem 0' }}>About</h1>

                <p>&copy; 2023 Oliver Zott</p>

                <p>
                    <strong>E-Mail: </strong>
                    <a href="mailto:csak1247@uibk.ac.at?subject=website&body=Message">csak1247@uibk.ac.at</a>
                </p>
                <p>
                    <strong>Github: </strong>
                    <a href="https://github.com/OliverZott" target="_blank">https://github.com/OliverZott</a>
                </p>
            </div>
        </main>
    )
}