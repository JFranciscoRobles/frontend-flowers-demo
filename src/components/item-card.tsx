import { DirectionAwareHover } from './ui-motion/direction-aware-card'
import Link from 'next/link'
import Typography from './ui/typography'
import { Product } from '@/lib/data'

type ItemCardProps = {
  item: Product
};

export const ItemCard = ({ item } : ItemCardProps) => {
  return (
    <Link href={item.href}>
      <DirectionAwareHover imageUrl={item.imagen}>
        <Typography className='text-xl font-bold text-primary-foreground'>{item.nombre}</Typography>
        <Typography className='text-primary-foreground'>${item.valor} / {item.moneda}</Typography>
      </DirectionAwareHover>
    </Link>
  )
}
