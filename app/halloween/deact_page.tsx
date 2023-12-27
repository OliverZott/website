/* eslint-disable @next/next/no-img-element */
import movies from './movies.json';


export default function Halloween() {

    return (
        <main className="dark">
            <img
                className="bg-img"
                alt="fundusalm"
                src="/halloween6.webp"
                srcSet="halloween/halloween6.webp 1920w, halloween/halloween6_900.webp 900w"
            />
            <div className='container'>

                <h1>Halloween Movies</h1>

                {movies.map((movie, index) => (
                    <div key={index}>
                        <h2>{movie.title}</h2>
                        <p>{movie.year}</p>
                        <div className="video-responsive">
                            <iframe
                                width="853"
                                height="480"
                                title={movie.title + " Trailer"}
                                src={`https://www.youtube.com/embed/${movie.trailer}`}
                                frameBorder="0"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

