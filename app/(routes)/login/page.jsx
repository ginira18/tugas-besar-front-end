'use client'

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await fetch('/api/authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        if (user.status === 200) {
            alert('Login Success');
            router.push('/');
        } else {
            alert('Login Failed');
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
                        Login
                    </Typography>

                    {/* <h4 style={{ marginBottom: 10, fontFamily: `Roboto` }}>Username</h4> */}
                    <TextField
                        id="filled-search"
                        label="Username"
                        type="username"
                        variant="filled"
                        margin='normal'
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    {/* <h4 style={{ marginBottom: 10, fontFamily: `Roboto` }}>Password</h4> */}
                    <TextField
                        id=" -password-input"
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
                        Sign In
                    </Button>

                    <Link href="/registration" variant="body2">
                        {"Don't have an account? Registration"}
                    </Link>
                </form>
            </Box>
        </Box>
    )
}