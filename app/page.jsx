'use client'
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'; 



const Home = () => {
  return (
    <>
    <h1>Kehadiran</h1>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Tahun</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Bulan</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem>Thirty</MenuItem>
        </Select>
      </FormControl>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['Hadir', 'Izin', 'Tidak Hadir'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
};
export default Home;
