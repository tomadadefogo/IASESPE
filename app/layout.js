import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './footer/page'
import Navbar from './navbar/page'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IASESPE',
  description: 'Criado por Pedro Luiz',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
        <link rel="icon" href="/icon.ico"/>
        </Head>
        <body>
          <Navbar />
          <div className={inter.className}>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </>
  )
}
