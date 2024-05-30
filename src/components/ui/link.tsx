import { AnchorHTMLAttributes, FC } from 'react'
import Link from 'next/link'
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
        'inline-flex justify-center items-center p-2 text-sm leading-none text-center rounded-lg ring-opacity-30 hover:bg-muted hover:shadow-outline focus:outline-none focus:ring-2 ring-primary/40 focus:bg-primary/20'
      )}
    >
      {props.children}
    </Link>
  )
}

export default LinkUI
