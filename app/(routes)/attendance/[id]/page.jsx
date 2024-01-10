import { getEmployeeAttendancesByCategoryAndDate, insertOrUpdate } from "@/app/_services/attendances";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, RadioGroup, Radio, Button, Paper } from "@mui/material";
import CustomDatePicker from "@/app/components/CustomDatePicker";
import MyRadioGroup from "@/app/components/MyRadioGroup";
import Card from "@mui/material/Card";
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import Grid from "@mui/material/Grid";
import { green, blue, red } from "@mui/material/colors";
import dayjs from "dayjs";

export default async function AttendancePage({ params: { id }, searchParams }) {
  const date = searchParams?.date ?? dayjs(new Date()).format('YYYY-MM-DD');
  const employees = await getEmployeeAttendancesByCategoryAndDate(id, date);
  const total_hadir = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'hadir').length
  const total_izin = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'izin').length
  const total_tidak_hadir = employees.filter(employee => employee.attendances.length > 0 && employee.attendances[0].kehadiran === 'tidak_hadir').length
  return (
    <form action={insertOrUpdate}>
      <h1>Presensi</h1>

      <CustomDatePicker defaultValue={date} />
      <Grid container spacing={2} sx={{ marginY: 3 }}>
        <Grid item xs={4}>
          <Grid container sx={{ textAlign: `center`, bgcolor: '#f5f5f5', padding: 2, alignItems: "center", boxShadow: 3 }}>
            <Grid item xs={6}>
              <WorkIcon sx={{ color: blue[300] }} />
              <p style={{ margin: 0, padding: 0 }}>Hadir</p>
            </Grid>
            <Grid item xs={6}>
              <h2> {total_hadir}</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Grid container column sx={{ textAlign: `center`, bgcolor: '#f5f5f5', padding: 2, alignItems: "center", boxShadow: 3 }}>
            <Grid item xs={6}>
              <WorkHistoryIcon sx={{ color: green[300] }} />
              <p style={{ margin: 0, padding: 0 }}>Izin</p>
            </Grid>
            <Grid item xs={6}>
              <h2>{total_izin}</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={4} item>
          <Grid container sx={{ textAlign: `center`, bgcolor: '#f5f5f5', padding: 2, alignItems: "center", boxShadow: 3 }}>
            <Grid item xs={6}>
              <WorkOffIcon sx={{ color: red[300] }} />
              <p style={{ margin: 0, padding: 0 }}>Tidak Hadir</p>
            </Grid>
            <Grid item xs={6}>
              <h2>{total_tidak_hadir}</h2>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

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
