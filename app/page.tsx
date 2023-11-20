import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function FormControlLabelPlacement() {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Hadir"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Izin"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Tanpa Keterangan"
          labelPlacement="top"
        />
        
      </RadioGroup>
    </FormControl>
  );
}