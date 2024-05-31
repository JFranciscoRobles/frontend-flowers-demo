import { Contact } from '@/components/landing/Contact'
import { Flowers } from '@/components/landing/Flowers'
import { Hero } from '@/components/landing/Hero'
import React, { Suspense } from 'react'

function Page () {
  return (
    <main className='flex flex-col w-full my-8 '>
      <Hero />
      <Flowers />
      <Suspense fallback={<div>loading...</div>}>
        <Contact />
      </Suspense>
    </main>

  )
}

export default Page

export const dynamic = 'force-dynamic'
// eslint-disable-next-line camelcase
export const experimental_ppr = true
