'use client'

import { usePathname } from "next/navigation"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '@/app/components/Navbar';

const drawerWidth = 240;

export default function LayoutProvider({ children, username }) {
    const pathName = usePathname()
    const unauthenticated_pages = ['/login', '/registration']
    const unauthenticated_page = unauthenticated_pages.some(page => page === pathName)
    return (
        <>
            {unauthenticated_page ?
                children :
                (
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <Navbar drawerWidth={drawerWidth}></Navbar>
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                        >
                            <Toolbar />
                            {children}
                        </Box>
                    </Box>
                )
            }
        </>
    )
}