'use client'

import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function MyRadioGroup({ name, options, defaultValue }) {
    const [selectedValue, setSelectedValue] = useState(defaultValue ?? '');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        setSelectedValue(defaultValue)
    }, [defaultValue])

    return (
        <RadioGroup
            key={name}
            row
            value={selectedValue}
            onChange={handleChange}
            name={name}
        >
            {options.map((option) => (
                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
            ))}
        </RadioGroup>
    );
}

export default MyRadioGroup;