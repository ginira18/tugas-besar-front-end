'use client'

import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditCategoryModal from '@/app/components/EditCategoryModal';
import Button from '@mui/material/Button';

const EmployeeList = ({ employees }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleEditCategory = (category) => {
    setEditingCategory(category);
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
            <TableCell>Nama Karyawan</TableCell>
            <TableCell>Alamat</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.alamat}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleEditCategory(employee)}>
                  Edit
                </Button>
                {/* <Button variant="outlined" onClick={() => onDelete(employee)}>
                  Delete
                </Button>
                <Button variant="outlined" onClick={() => handleDetail(employee)}>
                  Detail
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditCategoryModal
        open={editModalOpen}
        onClose={handleEditModalClose}
        category={editingCategory}
      />
    </TableContainer>
  );
};

export default EmployeeList;
