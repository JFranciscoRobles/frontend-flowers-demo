import { AnchorHTMLAttributes, FC } from 'react'
import { Link } from 'next-view-transitions'
import { cn } from '@/lib/utils'

type InternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

type LinkProps = InternalLinkProps & { href: string }; // Update type to match InternalLinkProps and ensure href is always defined

const LinkUI: FC<LinkProps> = (props) => {
  return (
    <Link
      {...props}
      href={props.href} // Ensure href is always defined
      className={cn(
        'hover:text-secondary-foreground text-primary-foreground inline-flex justify-center items-center p-2 text-sm leading-none text-center rounded-lg ring-opacity-30 hover:bg-secondary hover:shadow-outline focus:outline-none focus:ring-2 ring-secondary/40 focus:bg-secondary/20'
      )}
    >
      {props.children}
    </Link>
  )
}

export default LinkUI
