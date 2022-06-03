import { Button, Drawer, List, ListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        switch (selected) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/about-me');
                break;
            case 2:
                navigate('/projects');
                break;
            case 3:
                navigate('/technologies');
                break;
            case 4:
                navigate('/links');
                break;
            case 5:
                navigate('/creative-works');
                break;
            default:
                navigate('/');
                break;
        }
    }, [selected, navigate]);

    // <Route path='/' element={<Welcome />} />
    // <Route path='/about-me' element={<AboutMe />} />
    // <Route path='/projects' element={<Projects />} />
    // <Route path='/technologies' element={<Technologies />} />
    // <Route path='/links' element={<Links />} />
    // <Route path='/creative-works' element={<CreativeWorks />} />

    return (
        <header className="app-navbar">
            <a href="/" className="my-name">Mikayla Dobson</a>
            <h2>Web Design Contractor</h2>

            <Button onClick={() => setOpen(!open)}>Nav</Button>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List component="nav">

                    <ListItem button
                        selected={selected===0}
                        onClick={() => setSelected(0)}>
                            Home
                    </ListItem>

                    <ListItem button
                        selected={selected===1}
                        onClick={() => setSelected(1)}>
                            About me
                    </ListItem>

                    <ListItem button
                        selected={selected===2}
                        onClick={() => setSelected(2)}>
                            My Projects
                    </ListItem>

                    <ListItem button
                        selected={selected===3}
                        onClick={() => setSelected(3)}>
                            My Technologies
                    </ListItem>

                    <ListItem button
                        selected={selected===4}
                        onClick={() => setSelected(4)}>
                            Links
                    </ListItem>

                    <ListItem button
                        selected={selected===5}
                        onClick={() => setSelected(5)}>
                            My Creative Work
                    </ListItem>
                </List>
            </Drawer>
      </header>
    )
}