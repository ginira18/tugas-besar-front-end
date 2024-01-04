'use client'

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import { registration } from '@/app/_services/authentication';
import { useRouter } from 'next/navigation';

export default function Registration() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await fetch('/api/authentication/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, username, password }),
        })
        if (user.status === 200) {
            alert('Registration Success');
            router.push('/login');
        } else {
            alert('Registration Failed');
        }
    }


    return (
        <Box sx={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#F5F5F5'
            }

        }>
            <Box
                sx={{
                    boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.15)',
                    backgroundColor: 'white',
                    width: 600,
                    padding: 5,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Typography variant='h4' style={{ marginBottom: 50, textAlign: "center", fontFamily: `Roboto`, fontWeight: 'bold' }}>
                        Registration
                    </Typography>
                    <TextField
                        label="Nama"
                        type="nama"
                        variant="filled"
                        margin='normal'
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextField
                        label="Usename"
                        type="username"
                        variant="filled"
                        margin='normal'
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                </form>
            </Box>
        </Box>

    )
}