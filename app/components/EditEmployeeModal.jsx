'use client'

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const AddEmployeeModal = ({ open, onClose, employee }) => {

  const router = useRouter()

  const refreshData = () => {
    router.refresh()
  }

  const [employeeName, setEmployeeName] = useState('');
  const [employeeAlamat, setEmployeeAlamat] = useState('');



  const handleSave = async () => {
    if (employeeName.trim() !== '' && employeeAlamat.trim() !== '') {
      try {
        await fetch(`/api/employees/${employee?.id}`, {
          method: "PUT",
          body: JSON.stringify({
            name: employeeName,
            alamat: employeeAlamat,
          })
        })
        refreshData()
        setEmployeeName('');
        setEmployeeAlamat('');
      } catch (err) {
        console.log(err)
      } finally {
        onClose();
      }
    }
  };

  useEffect(() => {
    setEmployeeName(employee?.name ?? "")
    setEmployeeAlamat(employee?.alamat ?? "")
  }, [employee])

  return (
    <Modal open={open} onClose={onClose}>
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
          Edit Karyawan
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
        <Button variant="contained" onClick={handleSave}>
          Edit Karyawan
        </Button>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
