// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import { ReactNode, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const FloatCard = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className
}: {
  imageUrl: string;
  children: ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={cn(
        'aspect-square w-full bg-transparent rounded-lg overflow-hidden group/card relative',
        className
      )}
      whileHover={{ scale: 1.05 }} // Añadido para hacer flotar el card
    >
      <div className='relative w-full h-full'>
        <div className='absolute inset-0 z-10 w-full h-full ' />
        <div className='relative w-full h-full bg-gray-50 dark:bg-black'>
          <Image
            alt='image'
            className={cn(
              'h-full w-full object-cover scale-[1.15]',
              imageClassName
            )}
            width='1000'
            height='1000'
            src={imageUrl}
          />
        </div>
        <div
          className={cn(
            'text-white absolute bottom-0  p-2 z-40 opacity-1 bg-black/40 w-full',
            childrenClassName
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}
