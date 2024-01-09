import { updateEmployees, deleteEmployees } from '@/app/_services/employees'

export async function PUT(req, { params }) {
    const id = params.id
    let { name, alamat } = await req.json()
    try {
        await updateEmployees(id, {
            name: name,
            alamat: alamat
        })
        return Response.json({ message: 'Berhasil mengubah karyawan !' })
    } catch (err) {
        return Response.json({ message: 'Gagal mengubah karyawan !' })
    }
}

export async function DELETE(req, { params }) {
    const id = params.id
    try {
        await deleteEmployees(id)
        return Response.json({ message: 'Berhasil menghapus karyawan !' })
    } catch (err) {
        return Response.json({ message: 'Gagal menghapus karyawan !' })
    }
}