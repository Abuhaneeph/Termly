import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import Script from 'next/script'
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



  
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />

   
  <link rel="stylesheet" href = "assets/css/floatinglabel.css" />
      </head>
      
    
      <body className={inter.className} style={{background:  "#FF8C00"}}  >
      <Header/>
      <Footer/>
        {children}
      
        </body>
    </html>
  )
}
