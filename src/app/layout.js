import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <body className={`bg-[#0d0c22] ${inter.className} text-white`}>
     
       <div className='w-[80%] mx-auto'>
       <Navbar></Navbar>
        {children}
        <Footer></Footer>
       </div>

        </body>
      
    </html>
  )
}
