import '../App.scss';
import { DocumentStyle, ProjectsPage } from '../styles/Style';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const { htmlTheme } = DocumentStyle;
const { headerCard, projectCards, cardDimensions } = ProjectsPage;

export default function Projects() {
    return (
        <Grid sx={htmlTheme}>
            <Card sx={[headerCard, cardDimensions]}>What I Do:</Card>

            <Card sx={[projectCards, cardDimensions]}>
                <h2>Create full stack web applications</h2>
                <p>I have experience building web applications with and without back-end integrations.</p>
                <p>I am comfortable conceptualizing and organizing complex structures, and as such, my projects tend to be natural in their structure and easy to maintain.</p>
            </Card>

            <Card sx={[projectCards, cardDimensions]}>
                <h2>Database Operations and Management</h2>
                <p>My projects have featured both relational and non-relational databases, in particular PostgreSQL and MongoDB.</p>
                <p>I also have experience with various technologies for connecting these to front-end applications, including Prisma and Supabase.</p>
            </Card>
        
            <a href="/">Go home</a>
        </Grid>
    )
}