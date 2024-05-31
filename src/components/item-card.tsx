import { FlowerData } from 'data'
import { DirectionAwareHover } from './ui-motion/direction-aware-card'
import Link from 'next/link'
import Typography from './ui/typography'

export const ItemCard = (item : FlowerData) => {
  return (
    <Link href={item.nombre}>
      <DirectionAwareHover imageUrl={item.imagen}>
        <Typography className='text-xl font-bold text-primary-foreground'>{item.nombre}</Typography>
        <Typography className='text-primary-foreground'>${item.valor} / {item.moneda}</Typography>
      </DirectionAwareHover>
    </Link>
  )
}
