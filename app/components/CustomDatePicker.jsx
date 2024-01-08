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
        const url = pathname + "?date=" + newValue.format("YYYY-MM-DD")
        router.push(url)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(defaultValue)} onChange={(newValue) => handleChange(newValue)} />
        </LocalizationProvider>
    )
}