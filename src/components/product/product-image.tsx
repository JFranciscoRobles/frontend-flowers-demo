import Image from 'next/image'
import React from 'react'

interface ProductImageProps {
  src: string
  alt: string
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => (
  <div className='flex items-center justify-center'>
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className='object-cover w-full border border-gray-200 rounded-lg max-w-[30rem] aspect-square'
    />
  </div>
)

export default ProductImage
