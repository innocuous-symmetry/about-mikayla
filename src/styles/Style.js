import { indigo, pink, deepPurple, purple } from '@mui/material/colors';

export const DocumentStyle = {
    htmlTheme: {
        backgroundColor: purple[200]
    },
    linkStyle: {
        color: deepPurple[300],
        textDecoration: 'none'
    },
    buttonStyle: {
        backgroundColor: deepPurple[200],
        color: deepPurple[500],
        '&:hover': {
            backgroundColor: purple[400],
            color: deepPurple[50],
        },
        width: '25vw',
        height: '10rem',
        margin: '2rem',
    },
    galleryArrowStyle: {
        width: '8vw',
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        color: deepPurple[50],
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: indigo[800],
        }
    },
    galleryCards: {
        width: '3rem',
        height: '1rem',
        margin: '0.8rem'
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
        flexDirection: 'column',
        width: '95vw',
        height: '18rem',
    },
    galleryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    galleryPages: {
        display: 'flex',
        justifyContent: 'center',
    },
    galleryPage: {
        inactive: {
            backgroundColor: deepPurple[50],
        },
        active: {
            backgroundColor: indigo[800]
        }
    }
}