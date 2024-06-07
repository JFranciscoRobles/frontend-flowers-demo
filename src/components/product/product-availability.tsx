import React from 'react'

interface ProductAvailabilityProps {
  available: boolean
}

const ProductAvailability: React.FC<ProductAvailabilityProps> = ({ available }) => {
  if (!available) {
    return (
      <div className='w-full px-6 py-4 mt-auto bg-destructive text-destructive-foreground rounded-xl'>
        No disponible
      </div>
    )
  }
  return null
}

export default ProductAvailability
