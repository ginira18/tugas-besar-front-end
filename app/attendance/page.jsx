
"use client";
import React, { useState } from 'react';
import CategoryListAttendance from '../components/CategoryListAttendance'; // Ganti impor komponen dengan nama yang benar

const AttendancePage = () => {
  const [categories, setCategories] = useState(['Kategori 1']);

  return (
    <div>
      <h1>Attendance</h1>
      <h2>Daftar Kategori Karyawan:</h2>
      <CategoryListAttendance categories={categories} /> 
    </div>
  );
};

export default AttendancePage;
