import LinkUI from '@/components/ui/link'
import { menuData } from '@/lib/utils'

export const Menu = () => {
  return (
    <div className='flex-col items-center justify-center hidden gap-4 p-2 md:flex md:flex-row'>
      {menuData.map((item) => (
        <LinkUI href={item.link} key={item.title}>
          {item.title}
        </LinkUI>
      ))}
    </div>
  )
}
