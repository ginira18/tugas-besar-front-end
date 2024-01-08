import CategoryListAttendance from '@/app/components/CategoryListAttendance';
import { getCategoryEmployees } from '@/app/_services/category_employees';

export default async function AttendancePage() {
  const categories = await getCategoryEmployees();
  return (
    <div>
      <h1>Attendance</h1>
      <h2>Daftar Kategori Karyawan:</h2>
      <CategoryListAttendance categories={categories} />
    </div>
  );
}
