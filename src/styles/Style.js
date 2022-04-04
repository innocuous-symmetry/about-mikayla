import { red, green, pink, deepPurple, purple } from '@mui/material/colors';

// export const useStyles = ({
//     colorThemeA: {
//         backgroundColor: pink[50],
//         color: deepPurple[300]
//     },
//     html: {
//         backgroundColor: purple[200],
//     },
//     muiButtonA: {
//         backgroundColor: deepPurple[200],
//         color: deepPurple[500],
//         '&:hover': {
//             backgroundColor: purple[400],
//         }
//     },
//     welcomePage: {
//         display: 'flex',
//         backgroundColor: purple[100],
//         height: '100vh',
//         flexDirection: 'column',
//         alignItems: 'center',
//         overflowX: 'hidden'
//     },
//     gallery: {
//         display: 'flex',
//         width: '90vw',
//         justifyContent: 'center',
//     },
//     card: {
//         width: '250px',
//         height: '250px',
//         margin: '2rem',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',  
//     }
// });

export const DocumentStyle = {
    colorThemes: {
        themeA: {
            backgroundColor: pink[50],
            color: deepPurple[300]
        },
    },
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
        }
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