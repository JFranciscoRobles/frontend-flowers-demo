import { Contact } from '@/components/landing/Contact'
import { Flowers } from '@/components/landing/Flowers'
import { Hero } from '@/components/landing/Hero'
import React from 'react'

function Page () {
  return (
    <main className='flex flex-col w-full my-8 '>
      <Hero />
      <Flowers />
      <Contact id='home' />
    </main>

  )
}

export default Page

export const dynamic = 'force-dynamic'
