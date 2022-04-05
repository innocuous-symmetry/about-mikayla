import '../App.scss';
import { useEffect, useState, useRef, useMemo } from 'react';

// MUI components

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import profile from '../media/profile.jpeg';

// SX style object imports

import { DocumentStyle, WelcomePage } from '../styles/Style';

const {
    pageTheme, galleryTheme, galleryRow,
    galleryPages, galleryPage, welcomeFooter,
    mainHeaderCard
} = WelcomePage;

const { buttonStyle, galleryArrowStyle, galleryCards, dividerStyle } = DocumentStyle;

// Web page logic

export default function Welcome() {
    const [gallery, setGallery] = useState([0,1]);
    const [rendered, setRendered] = useState();

    // identifiers
    const cardOne = useRef();
    const cardTwo = useRef();
    const cardThree = useRef();
    const cardFour = useRef();
    const cardFive = useRef();

    const buttonOne = useRef();
    const buttonTwo = useRef();
    const buttonThree = useRef();
    const buttonFour = useRef();
    const buttonFive = useRef();

    const allCardRefs = [cardOne, cardTwo, cardThree, cardFour, cardFive];
    const allButtonRefs = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive];

    const galleryButtons = [
        <Button ref={buttonOne} variant="contained" href="/about-me" sx={buttonStyle}>What kinds of things do I do?</Button>,
        <Button ref={buttonTwo} variant="contained" href="/technologies" sx={buttonStyle}>What do I use to do it?</Button>,
        <Button ref={buttonThree} variant="contained" href="/projects" sx={buttonStyle}>What projects am I working on now?</Button>,
        <Button ref={buttonFour} variant="contained" href="/links" sx={buttonStyle}>Where can you find more about me and my work?</Button>,
        <Button ref={buttonFive} variant="contained" href="/creative-works" sx={buttonStyle}>Where can I listen to some of your music?</Button>
    ];

    // change active page indicator beneath gallery
    useEffect(() => {
        setRendered([
            galleryButtons[gallery[0]], galleryButtons[gallery[1]]
        ]);

        for (let each of allCardRefs) {
            // inactive style
            each.current.style.backgroundColor = '#ede7f6';
        }

        for (let each of gallery) {
            // active style
            allCardRefs[each].current.style.backgroundColor = "#673ab7";
        }

    }, [gallery]);

    // gallery page change logic
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

    // render
    return (
        <div className="welcome-page" style={pageTheme}>
            <Card sx={mainHeaderCard} elevation={5}>
                <Avatar alt="Mikayla Dobson" src={profile} sx={{width: 110, height: 110}} />
                <h3>Hi, my name is Mikayla! I'm a junior-level full stack web developer.</h3>
                <p>I excel in building well-structured and maintainable web applications, managing algorithmic complexity,
                    and adapting my workflow to fit the needs of any environment I should find myself in.
                </p>
                <h4 className="do-stuff">Thanks for visiting! Feel free to peruse below:</h4>
            </Card>

            <Divider orientation="horizontal" sx={dividerStyle} />
            
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

            <Divider orientation="horizontal" sx={dividerStyle} />

            <footer sx={welcomeFooter}>
                <p>&copy; Mikayla Dobson 2022</p>
            </footer>
        </div>
    );
}