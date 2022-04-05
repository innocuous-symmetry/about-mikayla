import { indigo, blue, pink, green, deepPurple, purple } from '@mui/material/colors';

export const DocumentStyle = {
    htmlTheme: {
        backgroundColor: purple[100],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
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
        backgroundColor: deepPurple[400],
        '&:hover': {
            backgroundColor: deepPurple[500],
        }
    },
    galleryCards: {
        width: '3rem',
        height: '1rem',
        margin: '0.8rem'
    },
    dividerStyle: {
        width: '80%',
        color: '#000000',
        borderWidth: '2px'
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
    mainHeaderCard: {
      display: 'flex',
      margin: '2rem',
      width: '35vw',
      padding: '1rem',
      flexDirection: 'column',
      backgroundColor: pink[50],
      alignItems: 'center',
      fontSize: '1.2rem',
    },
    galleryTheme: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: indigo[800],
        border: '1px solid purple',
        width: '70vw',
        height: '18rem',
        padding: '3rem',
        margin: '2rem',
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
    },
    welcomeFooter: {
        display: 'block',
        textAlign: 'right'
    }
}

export const ProjectsPage = {
    headerCard: {
        backgroundColor: green['A700']
    },
    projectCards: {
        backgroundColor: indigo[800],
        color: indigo[100],
    },
    cardDimensions: {
        width: '300px',
        height: '300px',
    }
}

export const TechnologiesPage = {
    technologyCard: {
        backgroundColor: indigo[50],
        width: '30vw',
        maxHeight: '10rem',
        margin: '2rem',
        padding: '2rem',
    }
}