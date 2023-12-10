// components/CategoryList.js

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

const CategoryList = ({ categories, onEdit, onDelete }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleEditCategory = (categoryName) => {
    setEditingCategory(categoryName);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
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
              <TableCell >
                <Button variant="outlined" onClick={() => handleEditCategory(category)}>
                  Edit
                </Button>
                <Button variant="outlined" onClick={() => onDelete(category)}>
                  Delete
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
    </TableContainer>
  );
};

export default CategoryList;
