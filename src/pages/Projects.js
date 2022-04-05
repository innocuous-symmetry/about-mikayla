export default function Projects() {
    return (
        <div className="In-Progress page">
            <h1>Here are some of my current in-progress projects!</h1>

            <div className="gallery">
                <div className="card">
                    <h1>Reddit, but it's all cats</h1>
                    <p>A read-only Reddit client -- this site fetches data from Reddit and curates a customizable feed.</p>
                    <p>Built using React/Redux</p>
                </div>

                <div className="card">
                    <h1>Musical Counterpoint Bot</h1>
                    <p>A web-based program with functionality to evaluate sample solutions of problems in species-based counterpoint, as detailed by Johann Fux in <em>Gradus ad Parnassum.</em></p>
                    <p>This project is intended to be used as a practical application of linked lists and other compound data structures in JavaScript.</p>
                </div>

                <div className="card">
                    <h1>(untitled) Online Guess-the-Word Game</h1>
                    <p>As part of a mentorship program hosted by Metazu Studio</p>
                    <p>Implemented using MongoDB, React, and Node/Express, using Material UI for front-end styling.</p>
                </div>
                
                <div className="card">
                    <h1>Splinter</h1>
                    <p>A clone of a popular card-based resource gathering game</p>
                    <p>Local multiplayer, with plans to build out online multiplayer and solo vs. CPU</p>
                </div>

                <div className="card">
                    <h1>And, last but not least, the site you see here!</h1>
                    <p>This site is built using React, Material UI, and SCSS, and is hosted on Github Pages.</p>
                </div>

            </div>
        </div>
    )
}