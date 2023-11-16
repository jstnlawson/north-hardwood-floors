import './globals.css'
import { Inter } from 'next/font/google'
import "./layout.css";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'North Hardwood Floors',
  description: 'Floor Sanding and Installation in Minneapolis and Saint Paul',
  icons: {
    icon: '/icon.ico',
  },
  keywords: [
    'Floor Sanding', 
    'Floor Installation', 
    'Floor Refinishing', 
    'Floor Patching',
    'Floor Repair',
    'Floor Staining',
    'Flooring',
    'Floor Damage',
    'Flooring Contractor', 
    'Pet Stains',
    'Pet Damage',
    'Water Damage',
    'Near Me', 
    'Hardwood Floor Sanding', 
    'Hardwood Floor Installation', 
    'Hardwood Floor Refinishing', 
    'Minneapolis', 
    'Saint Paul', 
    'Minnesota', 
    'dark stained floors', 
    'staircase', 
    'staircase refinishing', 
    'staircase sanding', 
    'staircase installation',
  ],
  
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-320`}>
      {children}
      </body>
    </html>
  )
}
