import '../App.scss';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import profile from '../media/profile.jpeg';

import { DocumentStyle, WelcomePage } from '../styles/Style';

const { pageTheme, galleryTheme, cardTheme } = WelcomePage;

const { colorThemes, linkStyle } = DocumentStyle;
const { themeA } = colorThemes;


export default function Welcome() {
    return (
        <div style={pageTheme}>
            <div className="landing">
                <Avatar alt="Mikayla Dobson" src={profile} sx={{width: 110, height: 110}} />
                <h3>Hi, my name is Mikayla! I'm a junior-level full stack web developer.</h3>
                <p>I excel in building well-structured and maintainable web applications, managing algorithmic complexity, and adapting my workflow to fit the needs of any environment I should find myself in.</p>
            </div>

            <h3 className="do-stuff">Thanks for visiting! Feel free to peruse below:</h3>
            
            <div style={galleryTheme} className="gallery">
                <Paper elevation={5} sx={[themeA, cardTheme]}>
                    <Button href="/projects" sx={linkStyle}>What kinds of things do I do?</Button>
                </Paper>

                <Paper elevation={5} sx={[themeA, cardTheme]}>
                    <Button href="/technologies" sx={linkStyle}>What do I use to do it?</Button>
                </Paper>

                <Paper elevation={5} sx={[themeA, cardTheme]}>
                    <Button href="/in-progress" sx={linkStyle}>What projects am I working on now?</Button>
                </Paper>

                <Paper elevation={5} sx={[themeA, cardTheme]}>
                    <Button href="/links" sx={linkStyle}>Where can you find more about me and my work?</Button>
                </Paper>

            </div>
        </div>
    )
}