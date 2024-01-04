import { login } from '@/app/_services/authentication'
import { cookies } from 'next/headers'

export async function POST(req) {
    let { name, username, password } = await req.json()
    try {
        await login(username, password)
        const cookieStore = cookies()
        cookieStore.set('name', name)
        cookieStore.set('username', username)
        return Response.json({ message:  'Berhasil login !' })
    } catch (err) {
        return Response.json({ message:  'Gagal login !' })
    }
}