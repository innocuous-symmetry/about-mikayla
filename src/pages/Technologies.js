export default function Technologies() {
    return (
        <div className="Technologies page">
            <h1>What technologies do I use?</h1>

            <section>
                <h2>These are my most often-used technologies:</h2>

                <div className="card">
                    {/* React logo */}
                    <p>React</p>
                </div>

                <div className="card">
                    {/* Redux logo */}
                    <p>Redux</p>
                </div>

                <div className="card">
                    {/* Express logo */}
                    <p>Express</p>
                </div>

                <div className="card">
                    {/* Postgres logo */}
                    <p>PostgreSQL</p>
                </div>

                <div className="card">
                    {/* Supabase */}
                    <p>Supabase</p>
                </div>

            </section>

            <section>
                <h2>Here are some I use relatively often:</h2>

                <div className="card">
                    {/* Mongo logo */}
                    <p>MongoDB</p>
                </div>
                
                <div className="card">
                    {/* Prisma */}
                    <p>Prisma</p>
                </div>

                <div className="card">
                    {/* Sass */}
                    <p>Sass</p>
                </div>

                <div className="card">
                    {/* Python */}
                    <p>Python</p>
                </div>
                
                <div className="card">
                    {/* Figma */}
                    <p>Figma</p>
                </div>

            </section>

            <section>
                <h2>And here are some things I'm working on learning:</h2>

                <div className="card">
                    {/* TypeScript */}
                    <p>TypeScript</p>
                </div>

                <div className="card">
                    {/* C# / ASP.NET */}
                    <p>C# / ASP.NET</p>
                </div>

                <div className="card">
                    {/* Tailwind */}
                    <p>Tailwind CSS</p>
                </div>
                
            </section>

            <a href="/">Home</a>
        </div>
    )
}