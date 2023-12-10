
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategory = () => {
    if (categoryName.trim() !== '') {
      onAddCategory(categoryName);
      setCategoryName('');
    }
  };

  return (
    <div>
      <TextField
        label="Nama Kategori"
        variant="outlined"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      /> <br/>
      <Button variant="contained" onClick={handleAddCategory}>
        Tambah Kategori
      </Button>
    </div>
  );
};

export default AddCategoryForm;
