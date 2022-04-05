import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';

import { TechnologiesPage } from '../styles/Style';

const { technologyCard } = TechnologiesPage;

export default function Technologies() {
    return (
        <div>
            <Card sx={technologyCard}>
                <h1>What technologies do I use?</h1>
            </Card>

            <Card sx={technologyCard}>
                <h2>These are my most often-used technologies:</h2>

                <Chip label="React" />
                <Chip label="Redux" />
                <Chip label="Express" />
                <Chip label="PostgreSQL" />
                <Chip label="Supabase" />
                <Chip label="MongoDB" />

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