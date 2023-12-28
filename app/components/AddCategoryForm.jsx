'use client'

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter, usePathname } from 'next/navigation';


const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const router = useRouter()
  const pathname = usePathname()

  const refreshData = () => {
    router.refresh()
  }

  const handleAddCategory = async () => {
    if (categoryName.trim() !== '') {
      try {
        await fetch('/api/category_employees', {
          method: "POST",
          body: JSON.stringify({ name: categoryName })
        })
        refreshData()
        setCategoryName('');
      } catch(err) {
        console.log(err)
      }
    }
  };

  return (
    <div>
      <TextField
        label="Nama Kategori"
        variant="outlined"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      /> <br />
      <Button variant="contained" onClick={handleAddCategory}>
        Tambah Kategori
      </Button>
    </div>
  );
};

export default AddCategoryForm;
