import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Typography from '@/components/ui/typography'
import { preguntasFrecuentes } from 'preguntas'

const FAQSection: React.FC = () => (
  <section className='container px-4 py-12 md:py-20 md:px-6'>
    <div className='my-12'>
      <Typography variant='h2' className='text-center'>
        Preguntas frecuentes (FAQ)
      </Typography>
    </div>
    <Accordion type='multiple' className='container w-full my-12'>
      {preguntasFrecuentes.map((pregunta, index) => (
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
  </section>
)

export default FAQSection
