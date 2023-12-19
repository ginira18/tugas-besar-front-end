"use client"
import React, { useState } from 'react';
import Layout from '../layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Radio, FormControlLabel } from '@mui/material';

const KaryawanData = [
  { id: 1, nama: 'Karyawan 1' },
  { id: 2, nama: 'Karyawan 2' },
  { id: 3, nama: 'Karyawan 3' },
];

const AbsensiKaryawanPage = () => {

  const [kehadiran, setKehadiran] = useState({});

  const handleKehadiranChange = (idKaryawan, nilai) => {
    setKehadiran((kehadiranSebelumnya) => ({
      ...kehadiranSebelumnya,
      [idKaryawan]: nilai,
    }));
  };

  return (
    <html>
      <body>
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
                        control={<Radio checked={kehadiran[karyawan.id] === 'Hadir'} onChange={() => handleKehadiranChange(karyawan.id, 'Hadir')} />}
                        label="Hadir"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        control={<Radio checked={kehadiran[karyawan.id] === 'Izin'} onChange={() => handleKehadiranChange(karyawan.id, 'Izin')} />}
                        label="Izin"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        control={<Radio checked={kehadiran[karyawan.id] === 'Tidak Hadir'} onChange={() => handleKehadiranChange(karyawan.id, 'Tidak Hadir')} />}
                        label="Tidak Hadir"
                        labelPlacement="top"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Layout>
      </body>
    </html>
  );
};

export default AbsensiKaryawanPage;
