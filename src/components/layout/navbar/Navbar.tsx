import { Menu } from './Menu'
import Typography from '@/components/ui/typography'
import {
  // eslint-disable-next-line camelcase
  Great_Vibes
} from 'next/font/google'
import { cn } from '@/lib/utils'
import CartButton from '@/components/cart/cart-button'

const gt = Great_Vibes({
  weight: '400',
  subsets: ['latin']
})

export const Navbar = () => {
  return (
    <div className='p-8 mb-8 bg-primary'>
      <div className='container flex flex-col w-full'>
        <Typography variant='h1' className={cn('w-full font-bold text-center p-2 text-primary-foreground', gt.className)}>Corazones y Pétalos</Typography>
        <div className='flex flex-col items-center justify-center w-full gap-4 my-4 md:flex-row text-primary-foreground'>
          <Menu />
          <CartButton />
        </div>
      </div>

    </div>
  )
}
