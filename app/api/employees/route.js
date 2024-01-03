import { insertEmployees } from '@/app/_services/employees'

export async function POST(req) {
    let { name, alamat, category_employee_id } = await req.json()
    try {
        await insertEmployees(name, alamat, category_employee_id)
        return Response.json({ message:  'Berhasil menambah karyawan !' })
    } catch (err) {
        return Response.json({ message:  'Gagal menambah karyawan !' })
    }
}