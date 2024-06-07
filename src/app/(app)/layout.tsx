import '@/app/(app)/globals.css'
import { Raleway } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/navbar/Navbar'
import { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import { ViewTransitions } from 'next-view-transitions'
import { Provider } from 'jotai'
import { CartProvider } from '@/components/cart/CartProvider'
import { Toaster } from 'sonner'

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

export default function Layou ({ children }: Args) {
  return (
    <ViewTransitions>
      <html lang='es-MX' suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen  antialiased', montserrat.className)}>
          <Provider>
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </CartProvider>
          </Provider>
          <Toaster richColors />
        </body>
      </html>
    </ViewTransitions>
  )
}
