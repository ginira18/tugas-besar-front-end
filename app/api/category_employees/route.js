import { insertCategoryEmployees } from '@/app/_services/employees'

export async function POST(req) {
    let { name } = await req.json()
    try {
        await insertCategoryEmployees(name)
        return Response.json({ message:  'Berhasil menambah category !' })
    } catch (err) {
        return Response.json({ message:  'Gagal menambah category !' })
    }
}