import {
   Bai_Jamjuree as BaiJamjuree,
   Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
   subsets: ['latin'],
   weight: ['700'],
   variable: '--font-bai-jamjuree',
})

export const metadata = {
   title: 'NLW Spacetime',
   description:
      'Uma cápsula do tempo construída com React, Next.js TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <body
            className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}
         >
            {children}
         </body>
      </html>
   )
}
