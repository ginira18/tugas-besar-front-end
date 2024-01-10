'use client'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useRouter, usePathname } from 'next/navigation';
export default function datepicker({ defaultValue = new Date() }) {
    const router = useRouter()
    const pathname = usePathname()
    function handleChange(newValue) {
        const url = pathname + "?month=" + newValue.format("YYYY-MM")
        router.push(url)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker views={['month', 'year']} defaultValue={dayjs(defaultValue)} onChange={(newValue) => handleChange(newValue)} />
        </LocalizationProvider>
    )
}