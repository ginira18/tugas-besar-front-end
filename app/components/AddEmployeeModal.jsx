'use client'

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const AddEmployeeModal = ({ category_employee_id }) => {

  const router = useRouter()

  const refreshData = () => {
    router.refresh()
  }

  const [open, setModalOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAlamat, setEmployeeAlamat] = useState('');



  const handleAddEmployee = async () => {
    if (employeeName.trim() !== '' && employeeAlamat.trim() !== '') {
      try {
        await fetch('/api/employees', {
          method: "POST",
          body: JSON.stringify({
            name: employeeName,
            alamat: employeeAlamat,
            category_employee_id: category_employee_id,
          })
        })
        refreshData()
        setEmployeeName('');
        setEmployeeAlamat('');
        setModalOpen(false);
      } catch (err) {
        console.log(err)
      }
    }
  };

  return (
    <>
      <Button variant="contained" onClick={event => setModalOpen(true)}>
        Tambah Karyawan
      </Button>
      <Modal open={open} onClose={event => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="div">
            Tambah Karyawan
          </Typography>
          <div style={{ marginBottom: 10 }}>
            <TextField
              label="Nama Karyawan"
              variant="outlined"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <TextField
              fullWidth
              multiline
              label="Alamat"
              variant="outlined"
              value={employeeAlamat}
              onChange={(e) => setEmployeeAlamat(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={handleAddEmployee}>
            Tambahkan
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddEmployeeModal;
