import React from 'react'

const Product = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h1>Product {params.id}</h1>
    </div>
  )
}

export default Product