'use client'

import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditCategoryModal from '@/app/components/EditCategoryModal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CategoryList = ({ categories }) => {
  const router = useRouter()
  const refreshData = () => {
    router.refresh()
  }

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

  const onDelete = async (id) => {
    try {
      await fetch(`api/category_employees/${id}`, {
        method: "DELETE",
      })
      refreshData()
    } catch (err) {
      console.log(err)
    }
  }

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
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleEditCategory(category)}>
                  Edit
                </Button>
                <Button variant="outlined" onClick={() => onDelete(category.id)}>
                  Delete
                </Button>
                <Link href={`employees/${category.id}`}>
                  <Button variant="outlined">
                    Detail
                  </Button>
                </Link>
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

export default CategoryList;
