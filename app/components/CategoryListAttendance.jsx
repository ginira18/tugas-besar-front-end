import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AbsensiKaryawanPage from './AbsensiKaryawanPage';

const CategoryListAttendance = ({ categories }) => {
  const [absensiModalOpen, setAbsensiModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAbsensiModalOpen = (categoryName) => {
    setSelectedCategory(categoryName);
    setAbsensiModalOpen(true);
  };

  const handleAbsensiModalClose = () => {
    setAbsensiModalOpen(false);
    setSelectedCategory('');
  };

  const handleAbsensi = (categoryName, kehadiran) => {
    // Lakukan logika atau panggil fungsi absensi di sini
    console.log(`Absen di kategori: ${categoryName} dengan kehadiran:`, kehadiran);
    // TODO: Implementasi logika absensi sesuai kebutuhan proyek Anda
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Kategori</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleAbsensiModalOpen(category)}>
                    Absensi
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={absensiModalOpen} onClose={handleAbsensiModalClose}>
        {/* <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }} */}
      
          <AbsensiKaryawanPage
            onAbsensi={(kehadiran) => handleAbsensi(selectedCategory, kehadiran)}
            onClose={handleAbsensiModalClose}
          />  
      </Modal>
    </>
  );
};

export default CategoryListAttendance;
