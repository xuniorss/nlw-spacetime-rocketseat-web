import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
   const { searchParams } = new URL(request.url)
   const code = searchParams.get('code')

   const registerResponse = await api.post('/register', { code })

   const { token } = registerResponse.data

   const redirectUrl = new URL('/', request.url)

   const cookieExispiresInSeconds = 7 * 24 * 60 * 60 // 7 days

   return NextResponse.redirect(redirectUrl, {
      headers: {
         'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExispiresInSeconds}`,
      },
   })
}
