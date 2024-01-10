'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';

export default function ButtonPrint() {
    const handlePrintClick = () => {
        window.print();
    };
    return (
        <>
            <Button
                sx={{ displayPrint: 'none' }}
                variant="contained" endIcon={<PrintIcon />} onClick={handlePrintClick}>
                Print
            </Button>
        </>
    )
}