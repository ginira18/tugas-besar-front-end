import { updateCategoryEmployees } from '@/app/_services/employees'

export async function PUT(req, { params }) {
    const id = params.id
    let { name } = await req.json()
    try {
        await updateCategoryEmployees(id, name)
        return Response.json({ message:  'Berhasil mengubah category !' })
    } catch (err) {
        return Response.json({ message:  'Gagal mengubah category !' })
    }
}