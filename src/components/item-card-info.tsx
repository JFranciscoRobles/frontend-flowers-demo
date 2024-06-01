import { FlowerData } from 'data'
import Link from 'next/link'
import Typography from './ui/typography'
import { FloatCard } from './ui-motion/float-card'

export const ItemCardInfo = (item : FlowerData) => {
  return (
    <Link href={item.href}>
      <FloatCard imageUrl={item.imagen}>
        <Typography className='text-xl font-bold text-primary-foreground'>{item.nombre}</Typography>
        <Typography className='text-primary-foreground'>${item.valor} / {item.moneda}</Typography>
      </FloatCard>
    </Link>
  )
}
