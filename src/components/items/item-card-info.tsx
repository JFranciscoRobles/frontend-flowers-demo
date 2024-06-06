import Link from 'next/link'
import { Product } from '@/lib/data'
import { FloatCard } from '../ui-motion/float-card'
import Typography from '../ui/typography'

type ItemCardInfoProps = {
  item: Product
};

export const ItemCardInfo = ({ item } : ItemCardInfoProps) => {
  return (
    <Link href={item.href}>
      <FloatCard imageUrl={item.imagen}>
        <Typography className='text-xl font-bold text-primary-foreground'>{item.nombre}</Typography>
        <Typography className='text-primary-foreground'>${item.valor} / {item.moneda}</Typography>
      </FloatCard>
    </Link>
  )
}
