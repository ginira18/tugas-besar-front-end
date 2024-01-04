
import AddCategoryForm from '@/app/components/AddCategoryForm';
import CategoryList from '@/app/components/CategoryList';
import { getCategoryEmployees } from '@/app/_services/category_employees'

export default async function EmployeesPage(){
  let categories = await getCategoryEmployees()

  return (
    <div>
      <h1>Kategori Karyawan</h1>
      <AddCategoryForm />
      <h2>Daftar Kategori Karyawan:</h2>
      <CategoryList
        categories={categories}
      />
    </div>
  );
}

