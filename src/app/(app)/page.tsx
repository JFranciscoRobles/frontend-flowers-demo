import { Flowers } from '@/components/landing/Flowers'
import { Hero } from '@/components/landing/Hero'
import React from 'react'

function Page () {
  return (
    <main className='flex flex-col w-full my-8 '>
      <Hero />
      <Flowers />
    </main>

  )
}

export default Page
