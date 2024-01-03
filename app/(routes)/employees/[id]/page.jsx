
import EmployeeList from '@/app/components/EmployeeList';
import { getEmployees } from '@/app/_services/employees'
import AddEmployeeModal from '@/app/components/AddEmployeeModal';

export default async function DetailCategory({params}){
  let employees = await getEmployees()

  let category_employee_id = params.id

  return (
    <div>
      <h1>Data Karyawan</h1>
      <AddEmployeeModal category_employee_id={category_employee_id} />
      <EmployeeList employees={employees} />
    </div>
  );
}

