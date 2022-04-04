import '../App.scss';
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import profile from '../media/profile.jpeg';

import { DocumentStyle, WelcomePage } from '../styles/Style';

const { pageTheme, galleryTheme, cardTheme } = WelcomePage;

const { colorThemes, linkStyle, buttonStyle } = DocumentStyle;
const { themeA } = colorThemes;


export default function Welcome() {
    const [gallery, setGallery] = useState([0,1]);

    const galleryButtons = [
        <Button variant="contained" href="/projects" sx={buttonStyle}>What kinds of things do I do?</Button>,
        <Button variant="contained" href="/technologies" sx={buttonStyle}>What do I use to do it?</Button>,
        <Button variant="contained" href="/in-progress" sx={buttonStyle}>What projects am I working on now?</Button>,
        <Button variant="contained" href="/links" sx={buttonStyle}>Where can you find more about me and my work?</Button>,
        <Button variant="contained" href="/creative-works" sx={buttonStyle}>Where can I listen to some of your music?</Button>
    ]

    // handle gallery debug
    useEffect(() => {
        console.log(gallery);
    }, [gallery]);

    const handleGallery = () => {
        let newState = [];
        for (let each of gallery) {
            let newNum = (each + 1) % galleryButtons.length;
            newState.push(newNum);
        }
        setGallery(newState);
    }

    return (
        <div style={pageTheme}>
            <div className="landing">
                <Avatar alt="Mikayla Dobson" src={profile} sx={{width: 110, height: 110}} />
                <h3>Hi, my name is Mikayla! I'm a junior-level full stack web developer.</h3>
                <p>I excel in building well-structured and maintainable web applications, managing algorithmic complexity,
                    and adapting my workflow to fit the needs of any environment I should find myself in.
                </p>
            </div>

            <h3 className="do-stuff">Thanks for visiting! Feel free to peruse below:</h3>
            
            <div style={galleryTheme} className="gallery">
                {galleryButtons[gallery[0]]}
                {galleryButtons[gallery[1]]}
            </div>

            <Button variant="contained" onClick={handleGallery}>Gallery?</Button>
        </div>
    )
}