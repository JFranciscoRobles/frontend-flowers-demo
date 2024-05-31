import { Suspense, useMemo } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import Typography from '../ui/typography'
import dynamic from 'next/dynamic'

export const Contact = () => {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6'>
        <div className='flex flex-col items-start justify-center space-y-6'>
          <div className='flex flex-col space-y-6'>
            <Typography variant='h2'>¡Contactame!</Typography>
            <Typography variant='span' size='muted'>
              ¿Tienes algun pedido especial o necesitas ayuda con tu orden? Contactanos y estaremos felices de ayudarte.
            </Typography>
          </div>
          <form className='flex flex-col w-full space-y-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Nómbre</Label>
              <Input id='name' type='text' placeholder='John Doe' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='phonenumber'>Número de Teléfono</Label>
              <Input id='phonenumber' type='number' placeholder='664XXXXXX' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Correó</Label>
              <Input id='email' type='email' placeholder='m@example.com' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='message'>Mensaje</Label>
              <Textarea id='message' placeholder='¿Como podemos ayudarte?' />
            </div>
            <Button type='submit' className='w-full'>
              Enviar
            </Button>
          </form>
        </div>
        <div className='flex justify-center w-full'>
          <Suspense fallback={null}>
            <Map posix={[4.79029, -75.69003]} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}