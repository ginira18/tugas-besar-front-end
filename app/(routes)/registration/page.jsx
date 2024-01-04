import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Margin, MarginOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Roboto } from 'next/font/google';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Registration() {
    return (

        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                boxShadow: '5px 5px 10px 0px blue',
                backgroundColor: 'white',
                width: 600,
            }}
        >
            <div style={{ margin: 50 }}>
                <Typography variant='h4' style={{marginBottom:50, textAlign: "center", fontFamily: `Roboto`, fontWeight: 'bold' }}>
                   Registration
                </Typography>

                {/* <h4 style={{ marginBottom: 10, fontFamily: `Roboto` }}>Nama</h4> */}
                <TextField
                    id="outlined-filled-search"
                    label="Nama"
                    type="nama"
                    variant="filled"
                    margin='normal'
                    fullWidth
                />
                <br />
                <TextField
                    id="outlined-filled-search"
                    label="Alamat"
                    type="alamat"
                    variant="filled"
                    margin='normal'
                    fullWidth
                />
                <br />
                <TextField
                    id="outlined-filled-search"
                    label="Usename"
                    type="username"
                    variant="filled"
                    margin='normal'
                    fullWidth
                />
                <br />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    margin='normal'
                    fullWidth
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register
                </Button>

                <Link href="login" variant="body2">
                    {"You have an account? Login"}
                </Link>
            </div>
        </Box>

    )
}