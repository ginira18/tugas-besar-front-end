
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeNIP, setEmployeeNIP] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddEmployee = () => {
    if (employeeName.trim() !== '' && employeeNIP.trim() !== '') {
      onAddEmployee({ name: employeeName, nip: employeeNIP });
      setEmployeeName('');
      setEmployeeNIP('');
      setModalOpen(false);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        Tambah Karyawan
      </Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
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
          <TextField
            label="NIP"
            variant="outlined"
            value={employeeNIP}
            onChange={(e) => setEmployeeNIP(e.target.value)}
          />
          <TextField
            label="Nama Karyawan"
            variant="outlined"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddEmployee}>
            Tambahkan
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddEmployeeForm;
