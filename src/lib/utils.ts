import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const menuData = [
  {
    title: 'Inicio',
    link: '/'
  },
  {
    title: 'Todas las Flores',
    link: '/flores'
  },
  {
    title: 'Sobre Nosotros',
    link: '/nosotros'
  },
  {
    title: 'Preguntas frecuentes',
    link: '/preguntas-frecuentes'
  },
  {
    title: 'Contacto',
    link: '/contacto'
  }
]
