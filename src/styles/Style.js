import { red, pink, deepPurple, purple } from '@mui/material/colors';

export const DocumentStyle = {
    colorThemes: {
        themeA: {
            backgroundColor: pink[50],
            color: deepPurple[300]
        },
        themeB: {

        }
    },
    htmlTheme: {
        backgroundColor: purple[200]
    },
    linkStyle: {
        color: deepPurple[300],
        textDecoration: 'none'
    }
}

export const WelcomePage = {
    pageTheme: {
        display: 'flex',
        backgroundColor: purple[100],
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden'
    },
    galleryTheme: {
        display: 'flex',
        width: '90vw',
        justifyContent: 'center',
    },
    cardTheme: {
        width: '250px',
        height: '250px',
        margin: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}