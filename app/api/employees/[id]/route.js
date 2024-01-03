import { updateCategoryEmployees, deleteCategoryEmployees } from '@/app/_services/category_employees'

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

export async function DELETE(req, { params }) {
    const id = params.id
    try {
        await deleteCategoryEmployees(id)
        return Response.json({ message:  'Berhasil menghapus category !' })
    } catch (err) {
        return Response.json({ message:  'Gagal menghapus category !' })
    }
}