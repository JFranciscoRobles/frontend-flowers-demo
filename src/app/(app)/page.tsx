import { Contact } from '@/components/landing/Contact'

import { Hero } from '@/components/landing/Hero'
import { ItemsSection } from '@/components/landing/ItemsSection'
import React from 'react'

function Page () {
  return (
    <main className='flex flex-col w-full lg:my-8 '>
      <Hero />
      <ItemsSection />
      <Contact id='home' />
    </main>

  )
}

export default Page

export const dynamic = 'force-dynamic'
