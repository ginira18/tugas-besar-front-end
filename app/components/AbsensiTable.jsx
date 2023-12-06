
import React from 'react';
import Layout from '../layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Radio, FormControlLabel } from '@mui/material';

const KaryawanData = [
  { id: 1, nama: 'Karyawan 1' },
  { id: 2, nama: 'Karyawan 2' },
  { id: 3, nama: 'Karyawan 3' },
];

const AbsensiKaryawanPage = () => {
  return (
    <Layout>
      <h1>Absensi Karyawan</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Karyawan</TableCell>
              <TableCell align="center">Kehadiran</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {KaryawanData.map((karyawan) => (
              <TableRow key={karyawan.id}>
                <TableCell>{karyawan.nama}</TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={<Radio />}
                    label="Hadir"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Izin"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Tidak Hadir"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default AbsensiKaryawanPage;
