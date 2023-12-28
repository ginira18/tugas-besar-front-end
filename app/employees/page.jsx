
import AddCategoryForm from '../components/AddCategoryForm';
import CategoryList from '../components/CategoryList';
import { getCategoryEmployees } from '@/app/_services/employees'

export default async function EmployeesPage(){
  
  let categories = await getCategoryEmployees()

  // const [editingCategory, setEditingCategory] = useState(null);

  const handleAddCategory = () => {
    console.log("tes")
  };

  const handleEditCategory = (oldCategory, newCategory) => {
    // const updatedCategories = categories.map((category) =>
    //   category === oldCategory ? newCategory : category
    // );
    // setCategories(updatedCategories);
    // setEditingCategory(null);
  };

  const handleDeleteCategory = (categoryName) => {
    // const updatedCategories = categories.filter((category) => category !== categoryName);
    // setCategories(updatedCategories);
  };

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

