import { getEmployeeAttendancesByCategoryAndDate, insertOrUpdate } from "@/app/_services/attendances";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, RadioGroup, Radio, Button } from "@mui/material";
import CustomDatePicker from "@/app/components/CustomDatePicker";

export default async function AttendancePage({ params: { id }, searchParams }) {
  const date = searchParams?.date ?? new Date();
  const employees = await getEmployeeAttendancesByCategoryAndDate(id, date);
  return (
    <form action={insertOrUpdate}>
      <h1>Presensi</h1>
      <CustomDatePicker />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Karyawan</TableCell>
              <TableCell align="center">Kehadiran</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <input
              type="hidden"
              name='date'
              value={date} />
            {employees.map((karyawan, index) => (
              <TableRow key={karyawan.id}>
                <input
                  type="hidden"
                  name={`employees[][employee_id]`}
                  value={karyawan.id} />
                <TableCell>{karyawan.name}</TableCell>
                <TableCell align="center">
                  <RadioGroup name={`kehadiran[${index}]`} row>
                    <FormControlLabel
                      control={<Radio />}
                      label="Hadir"
                      labelPlacement="top"
                      value="hadir"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Izin"
                      labelPlacement="top"
                      value="izin"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Tidak Hadir"
                      labelPlacement="top"
                      value="tidak_hadir"
                    />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button type="submit" variant="contained">Submit Absensi</Button>
    </form>
  );
}
