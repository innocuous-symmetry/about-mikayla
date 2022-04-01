export default function Links() {
    return (
        <div className='Links page'>
            <h1>Find more about my work at the links below!</h1>

            <div className="gallery">
                <div className="card">
                    {/* An image here for a Github logo? */}
                    <a href="https://github.com/innocuous-symmetry">My Github</a>
                </div>
                <div className="card">
                    {/* LinkedIn image? */}
                    <a href="https://www.linkedin.com/in/mikayla-dobson/">My LinkedIn Profile</a>
                </div>
                <div className="card">
                    <a href="https://codepen.io/innocuous-symmetry">My CodePen</a>
                </div>
            </div>
        </div>
    )
}