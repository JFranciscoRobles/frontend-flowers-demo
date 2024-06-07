import React from 'react'
import { productsData } from '@/lib/data'
import ProductImage from '@/components/product/product-image'
import ProductAvailability from '@/components/product/product-availability'
import ProductInfo from '@/components/product/product-info'
import FAQSection from '@/components/product/product-faq-section'
interface Params {
  params: {
    slug: string
  }
}

const Page: React.FC<Params> = ({ params }) => {
  const product = productsData.find((item) => item.slug === params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='flex flex-col min-h-screen my-12'>
      <section className='container grid items-center gap-12 px-4 py-12 mx-auto md:grid-cols-2 md:py-20 md:px-6'>
        <ProductImage src={product.imagen} alt={product.nombre} />
        <div className='flex flex-col items-start justify-start h-full'>
          <ProductAvailability available={product.disponibilidad} />
          <ProductInfo product={product} />
        </div>
      </section>
      <FAQSection />
    </div>
  )
}

export default Page
