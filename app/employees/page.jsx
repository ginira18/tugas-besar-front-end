"use client"

import React, { useState } from 'react';
import AddCategoryForm from '../components/AddCategoryForm';
import CategoryList from '../components/CategoryList';

const EmployeesPage = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleAddCategory = (categoryName) => {
    setCategories([...categories, categoryName]);
  };

  const handleEditCategory = (oldCategory, newCategory) => {
    const updatedCategories = categories.map((category) =>
      category === oldCategory ? newCategory : category
    );
    setCategories(updatedCategories);
    setEditingCategory(null);
  };

  const handleDeleteCategory = (categoryName) => {
    const updatedCategories = categories.filter((category) => category !== categoryName);
    setCategories(updatedCategories);
  };

  return (
    <div>
      <h1>Kategori Karyawan</h1>
      <AddCategoryForm onAddCategory={handleAddCategory} />
      <h2>Daftar Kategori Karyawan:</h2>
      <CategoryList
        categories={categories}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
};

export default EmployeesPage;
