import { getEmployeeAttendancesByCategoryAndDate, insertOrUpdate } from "@/app/_services/attendances";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, RadioGroup, Radio, Button } from "@mui/material";
import CustomDatePicker from "@/app/components/CustomDatePicker";
import MyRadioGroup from "@/app/components/MyRadioGroup";


export default async function AttendancePage({ params: { id }, searchParams }) {
  const date = searchParams?.date ?? new Date();
  const employees = await getEmployeeAttendancesByCategoryAndDate(id, date);
  const total_hadir = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'hadir').length
  const total_izin = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'izin').length
  const total_tidak_hadir = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'tidak_hadir').length
  return (
    <form action={insertOrUpdate}>
      <h1>Presensi</h1>
      {total_hadir}

      {total_izin}
      
      {total_tidak_hadir}
      <CustomDatePicker defaultValue={date} />
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
            <input
              type="hidden"
              name='category_employee_id'
              value={id} />
            {employees.map((karyawan, index) => (
              <TableRow key={karyawan.id}>
                <input
                  type="hidden"
                  name={`employees[][employee_id]`}
                  value={karyawan.id} />
                <TableCell>{karyawan.name}</TableCell>
                <TableCell align="center">
                  <MyRadioGroup name={`kehadiran[${index}]`} key={index} options={[
                    { value: 'hadir', label: 'Hadir' },
                    { value: 'izin', label: 'Izin' },
                    { value: 'tidak_hadir', label: 'Tidak Hadir' },
                  ]} defaultValue={karyawan.attendances.length > 0 ? karyawan.attendances[0].kehadiran : ''}></MyRadioGroup>
                  {/* <RadioGroup key={karyawan.id} name={`kehadiran[${index}]`} defaultValue={karyawan.attendances.length > 0 ? karyawan.attendances[0].kehadiran : ''} row>
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
                  </RadioGroup> */}
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
