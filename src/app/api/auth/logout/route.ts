import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
   const redirectUrl = new URL('/', request.url)

   return NextResponse.redirect(redirectUrl, {
      headers: {
         'Set-Cookie': `token=; Path=/; max-age=0`,
      },
   })
}
