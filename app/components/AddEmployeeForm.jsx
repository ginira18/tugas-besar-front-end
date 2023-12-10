// components/AddEmployeeForm.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [employeeName, setEmployeeName] = useState('');

  const handleAddEmployee = () => {
    if (employeeName.trim() !== '') {
      onAddEmployee(employeeName);
      setEmployeeName('');
    }
  };

  return (
    <div>
      <TextField
        label="Nama Karyawan"
        variant="outlined"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddEmployee}>
        Tambahkan
      </Button>
    </div>
  );
};

export default AddEmployeeForm;
