import { registration } from '@/app/_services/authentication'

export async function POST(req) {
    let { name, username, password } = await req.json()
    try {
        await registration(name, username, password)
        return Response.json({ message:  'Berhasil menambah user !' })
    } catch (err) {
        return Response.json({ message:  'Gagal menambah user !' })
    }
}