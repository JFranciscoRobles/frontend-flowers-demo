import '@/app/(app)/globals.css'
import { Raleway } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/navbar/Navbar'
import { ReactNode } from 'react'
import Footer from '@/components/landing/Footer'

type Args = {
  children: ReactNode;
};

const montserrat = Raleway({

  subsets: ['latin']
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'Flores',
  description: 'Bienvenido a Flores JFR'
}

export default function Layout ({ children }: Args) {
  return (
    <html lang='es-MX' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen  antialiased', montserrat.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
