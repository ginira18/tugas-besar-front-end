import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import CustomMonthPicker from './components/CustomMonthPicker';
import CustomBarChart from './components/CustomBarChart';
import dayjs from 'dayjs';
import { getChartAttendanceByMonth } from './_services/attendances';
import ButtonPrint from './components/ButtonPrint';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';

const Home = async ({ searchParams }) => {
  const month = searchParams?.month ? dayjs(searchParams.month) : dayjs(new Date())
  console.log(month.toISOString())
  const chart_xAxis = [
    {
      id: 'barCategories',
      data: ['Hadir', 'Izin', 'Tidak Hadir'],
      scaleType: 'band',
    },
  ]



  const chart_data = await getChartAttendanceByMonth(month)
  const chart_series = [
    {
      data: chart_data,
    },
  ]

  return (
    <>
      <h1>Kehadiran</h1>
      <CustomMonthPicker defaultValue={month.toISOString()} />
      <CustomBarChart xAxis={chart_xAxis} series={chart_series} />
      <ButtonPrint />
      
    </>
  );
};
export default Home;
