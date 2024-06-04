import { Contact } from '@/components/landing/Contact'
import Typography from '@/components/ui/typography'

const Page = () => {
  return (
    <main className='flex flex-col w-full my-8 '>
      <div className='my-12'>
        <Typography variant='h1' className='text-center'>
          Estamos aquí para ayudarte
        </Typography>
      </div>
      <Contact id='contact-page' />
    </main>
  )
}

export default Page
