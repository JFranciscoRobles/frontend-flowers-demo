import React from 'react'
import Typography from '../ui/typography'

function Footer () {
  return (
    <div className='flex bg-primary'>
      <div className='container flex justify-center w-full p-8 my-8'>
        <Typography className='text-primary-foreground'>
          Desarrollado por <a href='https://www.breakingdigitallimits.com/'>Breaking Digital Limits</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
