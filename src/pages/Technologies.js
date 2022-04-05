import '../App.scss';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import { Drawer } from '@mui/material';

import { TechnologiesPage, DocumentStyle } from '../styles/Style';

const { technologyCard } = TechnologiesPage;
const { htmlTheme } = DocumentStyle;

export default function Technologies() {
    return (
        <div style={htmlTheme}>
            <Card sx={technologyCard}>
                <h1>What technologies do I use?</h1>
            </Card>

            <Card sx={technologyCard}>
                <h2>These are my most often-used technologies:</h2>

                <div className="tech-scrollbar">
                    <Chip label="React" className="tech-bar-item"/>
                    <Chip label="Redux" className="tech-bar-item"/>
                    <Chip label="Express" className="tech-bar-item"/>
                    <Chip label="PostgreSQL" className="tech-bar-item"/>
                    <Chip label="Supabase" className="tech-bar-item"/>
                    <Chip label="MongoDB" className="tech-bar-item"/>
                </div>

                <div className="tech-scrollbar backup-bar">
                <Chip label="React" className="tech-bar-item"/>
                    <Chip label="Redux" className="tech-bar-item"/>
                    <Chip label="Express" className="tech-bar-item"/>
                    <Chip label="PostgreSQL" className="tech-bar-item"/>
                    <Chip label="Supabase" className="tech-bar-item"/>
                    <Chip label="MongoDB" className="tech-bar-item"/>
                </div>
            </Card>

            <Card sx={technologyCard}>
                <h2>Here are some I use relatively often:</h2>

                <Chip label="Sass" />
                <Chip label="Material UI" />
                <Chip label="Python" />
                <Chip label="Figma" />
                <Chip label="TypeScript" />

            </Card>

            <Card sx={technologyCard}>
                <h2>And here are some things I'm working on learning:</h2>

                <Chip label="Prisma" />
                <Chip label="C# / ASP.NET" />
                <Chip label="Next.js" />
                
            </Card>

            <a href="/">Home</a>
        </div>
    )
}