import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Typography from '@/components/ui/typography'
import { preguntasFrecuentes } from 'preguntas'

const Page = () => {
  const preguntas = preguntasFrecuentes
  return (
    <main className='flex flex-col w-full my-8 '>
      <div className='my-12'>
        <Typography variant='h1' className='text-center'>
          Preguntas frecuentes FAQ
        </Typography>
      </div>
      <Accordion type='single' collapsible className='container w-full my-12'>
        {preguntas.map((pregunta, index) => (
          <AccordionItem value={index.toString()} key={index} className='w-full'>
            <AccordionTrigger className='w-full'>
              <Typography variant='h3'>{pregunta.pregunta}</Typography>
            </AccordionTrigger>
            <AccordionContent className='w-full'>
              <Typography>{pregunta.respuesta}</Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

export default Page
