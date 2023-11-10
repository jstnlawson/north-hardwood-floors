import './globals.css'
import { Inter } from 'next/font/google'
import "./layout.css";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'North Hardwood Floors',
  description: 'Floor Sanding and Installation in Minneapolis and Saint Paul',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} max-w-1440 min-w-320 mx-auto`}> */}
      <body className={`${inter.className} min-w-320`}>
      {children}
      </body>
    </html>
  )
}
