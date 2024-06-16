
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import NextAuthProvider from '@/provider/NexthAuthProvider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Termly',
  description: 'Termly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
   
    


   




  



   
      </head>
      
    
      <body className={inter.className} style={{background:  "#FF8C00"}}  >
      <NextAuthProvider>
      <ToastContainer/>
      <Header/>
        {children}
      <Footer/>
      </NextAuthProvider>
   
        </body>
    </html>
  )
}
