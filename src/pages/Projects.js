import '../App.scss';
import { useState } from 'react';

import { DocumentStyle, ProjectsPage } from '../styles/Style';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const { htmlTheme, stockGallery } = DocumentStyle;
const { projectsButton } = ProjectsPage;

export default function Projects() {
    const galleryArray = [
        (
            <Card>
                <h1>Reddit, but it's all cats</h1>
                <p>A read-only Reddit client -- this site fetches data from Reddit and displays a curated feed.</p>
                <p>This was built on Reddit's JSON API, using React/Redux and CSS.</p>
                <p>And yes, it's all cats.</p>
                <a href="https://reddit-but-all-cats.netlify.app/" target="_blank" rel="noreferrer">View the deployed project!</a>
            </Card>
        ),
        (
            <Card>
                <h1>Personal Timestamp Generator</h1>
                <p>A small-scale timestamp/productivity management tool for individual use and logging of 
                    time, including compartmentalization by task and some aggregate functions based on queries.
                </p>
                <p>Command-line interface built on Python with a SQLite Database.</p>
                <a href="https://github.com/innocuous-symmetry/timestamp_project" target="_blank" rel="noreferrer">View the repo here!</a>
            </Card>
        ),
        (
            <Card>
                <h1>Musical Counterpoint Bot</h1>
                <p>A web-based program with functionality to evaluate sample solutions of problems in 
                    species-based counterpoint, as detailed by Johann Fux in <em>Gradus ad Parnassum.</em></p>
                <p>This project is intended to be used as a practical application of linked lists and 
                    other compound data structures in JavaScript.</p>
                <p>In progress. Using vanilla HTML/CSS/JS.</p>
            </Card>
        ),
        (
            <Card>
                <h1>(untitled) Online Guess-the-Word Game</h1>
                <p>As part of a mentorship program hosted by Metazu Studio</p>
                <p>Implemented using MongoDB, React, and Node/Express, styled with Material UI/SCSS.</p>
                <p>In progress, building in collaboration with others at Metazu Studio.</p>
            </Card>
        ),
        (
            <Card>
                <h1>Splinter</h1>
                <p>A clone of a popular card-based resource gathering game</p>
                <p>Local multiplayer, with plans to build out online multiplayer and solo vs. CPU</p>
                <p>In progress. Using React, Node/Express, and PostgreSQL.</p>
            </Card>
        ),
        (
            <Card>
                <h1>Carenest</h1>
                <p>Designed in collaboration with Faith Magras, Elvis Hernandez, and Daytreon Dean 
                    as a submission for #HACKTN in March 2022.</p>
                <p>Produced using React. View the repo <a target="_blank" rel="noreferrer" href="https://github.com/Team-Carenest/carenest">here!</a></p>
            </Card>
        ),
        (
            <Card>
                <h1>And, last but not least, the site you see here!</h1>
                <p>This site is built using React, Material UI, and SCSS, and is hosted on Github Pages.</p>
            </Card>
        ),
    ]

    const [galleryIndex, setGalleryIndex] = useState(0);

    const handleDecrement = () => {
        setGalleryIndex((prev) => {
            let newValue = prev - 1;
            if (newValue === -1) {
                newValue = galleryArray.length - 1;
            }
            return newValue;
        });
    }

    const handleIncrement = () => {
        setGalleryIndex(prev => (prev + 1) % galleryArray.length);
    }

    return (
        <div className="projects-page" style={htmlTheme}>
            <h1>Here are some sample projects from my portfolio!</h1>

            <div style={stockGallery}>
                <Button style={projectsButton} onClick={handleDecrement}>{'<'}</Button>
                {galleryArray[galleryIndex]}
                <Button style={projectsButton} onClick={handleIncrement}>{'>'}</Button>
            </div>
        </div>
    )
}