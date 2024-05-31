'use client'
import React from 'react'
import Texto from './about.mdx'

function Page () {
  return (
    <main className='flex flex-col w-full my-8 '>
      <div className='container my-12 prose prose-lg'>
        <Texto />
      </div>
    </main>
  )
}

export default Page
