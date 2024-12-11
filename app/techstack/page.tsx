/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function TechStack() {
    return (
        <main>
            <img
                className="bg-img"
                alt="mountain2_wide"
                src="/sonnkar.webp"
                srcSet="/sonnkar.webp 1920w, /sonnkar-900.jpg 900w"
            />
            <div className='container'>

                <h1>Tech Stack</h1>

                <h2>Programming Languages</h2>
                <div className="flexbar">
                    <div className="flexbar-item">
                        <img src="logos/css.png" alt="css" title="C#" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/cpp.svg" alt="C++" title="C++" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/ts.png" alt="typescript" title="TypeScript" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/python.png" alt="python" title="Python" />
                    </div>
                </div>

                <h2>Frameworks</h2>
                <div className="flexbar">
                    <div className="flexbar-item">
                        <img src="logos/dotnet-logo.jpg" alt="python" title=".NET" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/react.png" alt="ts" title="React" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/nextjs.webp" alt="css" title="NextJS" />
                    </div>
                </div>

                <h2>Tools</h2>
                <div className="flexbar">
                    <div className="flexbar-item">
                        <img src="logos/Git-Icon-1788C.png" alt="GIT Versioning" title="GIT" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/docker1.webp" alt="Docker" title="Docker" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/azure_devops.png" alt="Azure DevOps" title="Azure DevOps" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/jb_beam.png" alt="JetBrains" title="JetBrains IDEs" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/code.jpg" alt="vs code" title="Visual Studio Code / VS 2022" />
                    </div>
                </div>


                <h2>Databases</h2>
                <div className="flexbar">
                    <div className="flexbar-item">
                        <img src="logos/postgre.svg" alt="PostgreSQL" title="PostgreSQL" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/mongodb.webp" alt="MongoDB" title="MongoDB" />
                    </div>
                    <div className="flexbar-item">
                        <img src="logos/sqlite.png" alt="SQLite" title="SQLite" />
                    </div>
                </div>

                <h1>Projects</h1>
                <p>Under Construction</p>
                {/* <img className="small-image" src="construction.jpg" alt="under construction" title="under construction" sizes="40" /> */}
                <Image
                    src="/construction.jpg"
                    width={500}
                    height={521}
                    alt="under-construction"
                />
            </div>
        </main>
    )
}