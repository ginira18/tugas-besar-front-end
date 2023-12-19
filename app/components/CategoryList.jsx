
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
import TextField from '@mui/material/TextField';
import AddEmployeeForm from './AddEmployeeForm';

const EditCategoryModal = ({ open, onClose, onSave, categoryName }) => {
  const [editedCategory, setEditedCategory] = useState(categoryName);

  const handleSave = () => {
    onSave(editedCategory);
    onClose();
  };

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
          Edit Kategori
        </Typography>
        <TextField
          label="Nama Kategori"
          variant="outlined"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        />
        <Button variant="contained" onClick={handleSave}>
          Simpan
        </Button>
      </Box>
    </Modal>
  );
};

const AddEmployeeModal = ({ open, onClose, onAddEmployee }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeNIP, setEmployeeNIP] = useState('');

  const handleAddEmployee = () => {
    if (employeeName.trim() !== '' && employeeNIP.trim() !== '') {
      onAddEmployee({ name: employeeName, nip: employeeNIP });
      setEmployeeName('');
      setEmployeeNIP('');
      onClose();
    }
  };

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
  );
};

const CategoryList = ({ categories, onEdit, onDelete, onAddEmployee, employees }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleEditCategory = (categoryName) => {
    setEditingCategory(categoryName);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditingCategory(null);
  };

  const handleAddEmployee = (categoryName) => {
    setEditingCategory(categoryName);
    setAddEmployeeModalOpen(true);
  };

  const handleAddEmployeeModalClose = () => {
    setAddEmployeeModalOpen(false);
    setEditingCategory(null);
  };

  return (
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
                <Button variant="outlined" onClick={() => handleEditCategory(category)}>
                  Edit
                </Button>
                <Button variant="outlined" onClick={() => onDelete(category)}>
                  Delete
                </Button>
                <Button variant="outlined" onClick={() => handleAddEmployee(category)}>
                  Tambah Karyawan
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditCategoryModal
        open={editModalOpen}
        onClose={handleEditModalClose}
        onSave={(newCategory) => {
          onEdit(editingCategory, newCategory);
          handleEditModalClose();
        }}
        categoryName={editingCategory}
      />
      <AddEmployeeModal
        open={addEmployeeModalOpen}
        onClose={handleAddEmployeeModalClose}
        onAddEmployee={(employee) => {
          onAddEmployee(editingCategory, employee);
          handleAddEmployeeModalClose();
        }}
      />
    </TableContainer>
  );
};

export default CategoryList;
