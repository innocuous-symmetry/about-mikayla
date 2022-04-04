import '../App.scss';
import { useEffect, useState, useRef } from 'react';

// MUI components

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import profile from '../media/profile.jpeg';

// SX style object imports

import { DocumentStyle, WelcomePage } from '../styles/Style';

const { pageTheme, galleryTheme, galleryRow, galleryPages, galleryPage } = WelcomePage;
const { buttonStyle, galleryArrowStyle, galleryCards } = DocumentStyle;

// Web page logic

export default function Welcome() {
    const [gallery, setGallery] = useState([0,1]);
    const [rendered, setRendered] = useState();

    const cardOne = useRef();
    const cardTwo = useRef();
    const cardThree = useRef();
    const cardFour = useRef();
    const cardFive = useRef();

    const allRefs = [cardOne, cardTwo, cardThree, cardFour, cardFive];

    const galleryButtons = [
        <Button variant="contained" href="/projects" sx={buttonStyle}>What kinds of things do I do?</Button>,
        <Button variant="contained" href="/technologies" sx={buttonStyle}>What do I use to do it?</Button>,
        <Button variant="contained" href="/in-progress" sx={buttonStyle}>What projects am I working on now?</Button>,
        <Button variant="contained" href="/links" sx={buttonStyle}>Where can you find more about me and my work?</Button>,
        <Button variant="contained" href="/creative-works" sx={buttonStyle}>Where can I listen to some of your music?</Button>
    ]

    // handle gallery debug
    useEffect(() => {
        setRendered([
            galleryButtons[gallery[0]], galleryButtons[gallery[1]]
        ]);

        for (let each of allRefs) {
            each.current.style.backgroundColor = "blue";
        }

        for (let each of gallery) {
            allRefs[each].current.style.backgroundColor = "purple";
        }

    }, [allRefs, gallery]);

    const handleDecrement = () => {
        let newState = [];
        for (let each of gallery) {
            let newNum = each - 1;
            if (newNum === -1) {
                newNum = galleryButtons.length - 1;
            }
            newState.push(newNum);
        }
        setGallery(newState);
    }

    const handleIncrement = () => {
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
                <div style={galleryRow}>
                    <Button sx={galleryArrowStyle} onClick={handleDecrement}>{'<'}</Button>
                    {rendered}
                    <Button sx={galleryArrowStyle} onClick={handleIncrement}>{'>'}</Button>
                </div>
                <div style={galleryPages}>
                    <Card ref={cardOne} sx={galleryCards} />
                    <Card ref={cardTwo} sx={galleryCards} />
                    <Card ref={cardThree} sx={galleryCards} />
                    <Card ref={cardFour} sx={galleryCards} />
                    <Card ref={cardFive} sx={galleryCards} />
                </div>
            </div>
        </div>
    );
}