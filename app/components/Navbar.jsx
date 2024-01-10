'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';


export default function Navbar({drawerWidth}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar sx={{
                marginTop: "4px",
                marginBottom: "4px",
            }}/> */}
            <div style={{textAlign:"center", marginBottom:"20px", marginTop:"15px"}}>
                <h1 style={{color:"#3c95d8", fontFamily:"Roboto", margin:0}}>LOGO</h1>
                 </div>
            {/* <h1></h1> */}

            <Divider />
            <List style={{paddingTop:"70%", paddingBottom:"100%"}}>
                <ListItem disablePadding>
                    <ListItemButton href='/'>
                        <ListItemIcon><HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href='/employees'>
                        <ListItemIcon><PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Employees" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href='/attendance'>
                        <ListItemIcon><AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Attendance" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

        </div>
    );

    // Remove this const when copying and pasting into your project.
    // const container = window !== undefined ? () => window().document.body : undefined;

    return (<>
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    <p>Sistem Informasi Absensi Karyawan - SIAKAR</p>
                </Typography>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    </>)
}