'use client'

import { BarChart } from '@mui/x-charts/BarChart';

export default function CustomBarChart({ xAxis = [], series = [], width = 500, height = 300 }) {
    return (
        <BarChart
            xAxis={xAxis}
            series={series}
            width={width}
            height={height}
        />
    )
}