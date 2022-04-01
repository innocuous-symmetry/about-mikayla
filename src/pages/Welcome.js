export default function Welcome() {
    return (
        <div className="Welcome page">
            <header className="landing-section">
            </header>

            <main>
                <h1>Mikayla Dobson</h1>
                <h2>Web Design Contractor</h2>

                <h3>Hi, my name is Mikayla! I'm a junior-level full stack web developer.</h3>
                <p>I excel in building well-structured and maintainable web applications, managing algorithmic complexity, and adapting my workflow to fit the needs of any environment I should find myself in.</p>

                <h3>So, thanks for stopping by! Feel free to peruse below:</h3>
                
                <div className="gallery">

                    <div className="card">
                        <a href="/projects">What kinds of things do I do?</a>
                    </div>

                    <div className="card">
                        <a href="/technologies">What do I use to do it?</a>
                    </div>

                    <div className="card">
                        <a href="/in-progress">What projects am I working on now?</a>
                    </div>

                    <div className="card">
                        <a href="/links">Where can you find more about me and my work?</a>
                    </div>

                </div>
            </main>
        </div>
    )
}