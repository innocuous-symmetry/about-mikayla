import '../App.scss';
import { useState, useEffect, useRef } from 'react';

import { DocumentStyle, ProjectsPage } from '../styles/Style';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const { htmlTheme, stockGallery } = DocumentStyle;
const { projectsButton } = ProjectsPage;

const defaultFilter = {
    language: '',
    searchTerm: '',
    inProgress: null
}

export default function Projects() {
    const [results, setResults] = useState();
    const [filter, setFilter] = useState();

    const searchInput = useRef();
    const languageFilter = useRef();

    useEffect(() => {
        const galleryArray = [
            {
                name: "Mikayla's E-Commerce Store",
                languages: ["TypeScript", "React", "PERN", "REST_API"],
                inProgress: true,
                jsx: (
                    <Card>
                        <h1>Mikayla's E-Commerce Store</h1>
                        <p>A fully-featured e-commerce platform</p>
                        <p>Built in React with TypeScript, Node/Express, and PostgreSQL</p>
                        <p>Payment processing supported through Stripe</p>
                        <p>REST API fully documented in Swagger</p>
                        <p>IN PROGRESS</p>
                    </Card>
                )
            },
            {
                name: "Procedural Drones",
                languages: ["JavaScript", "HTML/CSS"],
                inProgress: true,
                deployed: true,
                jsx: (
                    <Card>
                        <h1>Procedural Drones</h1>
                        <p>An experimental space for building out procedural music generation using vanilla JavaScript</p>
                        <p>Uses Tone.js to interact with the Web Audio API</p>
                        <p>Features a plain HTML/CSS front end to interact with the program</p>
                        <div className="links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/procedural-drones-01">GitHub Repo</a>
                            <a target="_blank" rel="noreferrer" href="https://innocuous-symmetry.github.io/procedural-drones-01/">Deployed version</a>
                        </div>
                    </Card>
                )
            },
            {
                name: "Reddit, but it's all cats",
                languages: ["React", "Redux"],
                inProgress: false,
                deployed: true,
                jsx: (
                    <Card>
                        <h1>Reddit, but it's all cats</h1>
                        <p>A read-only Reddit client -- this site fetches data from Reddit and displays a curated feed.</p>
                        <p>This was built on Reddit's JSON API, using React/Redux and CSS.</p>
                        <p>And yes, it's all cats.</p>
                        <div className="links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/cat-reddit">GitHub Repo</a>
                            <a target="_blank" rel="noreferrer" href="https://reddit-but-all-cats.netlify.app/">Deployed version</a>
                        </div>
                    </Card>
                )
            },
            {
                name: "Personal Timestamp Generator",
                languages: ["Python", "SQLite"],
                inProgress: false,
                jsx: (
                    <Card>
                        <h1>Personal Timestamp Generator</h1>
                        <p>A small-scale timestamp/productivity management tool for individual use and logging of 
                            time, including compartmentalization by task and some aggregate functions based on queries.
                        </p>
                        <p>Command-line interface built on Python with a SQLite Database.</p>
                        <a href="https://github.com/innocuous-symmetry/timestamp_project" target="_blank" rel="noreferrer">View the repo here!</a>
                    </Card>
                )
            },
            {
                name: "Musical Counterpoint Bot",
                languages: ["HTML/CSS", "JavaScript"],
                inProgress: true,
                jsx: (
                    <Card>
                        <h1>Musical Counterpoint Bot</h1>
                        <p>A web-based program with functionality to evaluate sample solutions of problems in 
                            species-based counterpoint, as detailed by Johann Fux in <em>Gradus ad Parnassum.</em></p>
                        <p>This project is intended to be used as a practical application of linked lists and 
                            other compound data structures in JavaScript.</p>
                        <p>In progress. Using vanilla HTML/CSS/JS.</p>
                    </Card>
                )
            },
            {
                name: "Password Game",
                languages: ["React", "MongoDB", "MERN", "React", "REST_API", "Socket.io", "Sass", "MaterialUI"],
                inProgress: true,
                jsx: (
                    <Card>
                        <h1>Password Game</h1>
                        <p>As part of a mentorship program hosted by Metazu Studio</p>
                        <p>Implemented using MongoDB, React, and Node/Express, styled with Material UI/SCSS.</p>
                        <p>In progress, building in collaboration with others at Metazu Studio.</p>
                    </Card>
                )
            },
            {
                name: "Splinter",
                languages: ["React", "PERN", "Socket.io"],
                inProgress: true,
                jsx: (
                    <Card>
                        <h1>Splinter</h1>
                        <p>A clone of a popular card-based resource gathering game</p>
                        <p>Local multiplayer, with plans to build out online multiplayer and solo vs. CPU</p>
                        <p>In progress. Using React, Node/Express, and PostgreSQL.</p>
                    </Card>
                )
            },
            {
                name: "Carenest",
                languages: ["React"],
                inProgress: false,
                jsx: (
                    <Card>
                        <h1>Carenest</h1>
                        <p>Designed in collaboration with Faith Magras, Elvis Hernandez, and Daytreon Dean 
                            as a submission for #HACKTN in March 2022.</p>
                        <p>Produced using React. View the repo <a target="_blank" rel="noreferrer" href="https://github.com/Team-Carenest/carenest">here!</a></p>
                    </Card>
                )
            },
            {
                name: "This Site",
                languages: ["React", "Sass", "MaterialUI"],
                inProgress: true,
                jsx: (
                    <Card>
                        <h1>And, last but not least, the site you see here!</h1>
                        <p>This site is built using React, Material UI, and SCSS, and is hosted with Netlify.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/about-mikayla">View the site repo here!</a>
                    </Card>
                )
            }
        ]

        if (!filter) {
            setResults(galleryArray.map(each => each.jsx));
        }

        if (filter) {
            let result = galleryArray;
            if (filter.searchTerm) {
                let termLower = filter.searchTerm.toLowerCase();
                result = result.filter(obj => obj.name.toLowerCase().includes(termLower));
            }
            if (filter.language) {
                let adjustedLang = ((filter.language === 'PostgreSQL' || filter.language === "Express") ? "PERN" : filter.language);
                result = result.filter(obj => obj.languages.includes(adjustedLang));
            }
            if (filter.inProgress) {
                result = result.filter(obj => obj.inProgress === filter.inProgress);
            }
            
            setResults(result.map(each => each.jsx));
        }
    }, [filter]);

    const handleChange = (e) => {
        e.preventDefault();
        setFilter({
            ...filter,
            language: e.target.value
        })
    }

    const handleReset = () => {
        setFilter(defaultFilter);
        searchInput.current.value = '';
        languageFilter.current.value = '';
    }

    return (
        <div className="projects-page" style={htmlTheme}>
            <h1>Here are some sample projects from my portfolio!</h1>

            <section className="filter-panel">
                <h2>Filter by:</h2>
                <div className="filter-controls">
                    <input
                        ref={searchInput} type="text"
                        onChange={(e) => setFilter({...filter, searchTerm: e.target.value})}
                        placeholder="Enter a search term">
                    </input>
                    <select ref={languageFilter} onChange={handleChange} name="language" id="language">
                        <option value="">- Language -</option>
                        <option value="Express">Express</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="MaterialUI">Material UI</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="Python">Python</option>
                        <option value="React">React</option>
                        <option value="Redux">Redux</option>
                        <option value="REST_API">REST API</option>
                        <option value="Sass">Sass</option>
                        <option value="SQLite">SQLite</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                    <button onClick={() => setFilter({...filter, inProgress: !filter.inProgress})}>Include in-progress</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </section>

            <div className="project-cards">{results}</div>
        </div>
    )
}