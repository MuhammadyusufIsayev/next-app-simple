import React from 'react'

const Product = ({params} : {params: {id: string}}) => {
  return (
    <div>
      <h1>Category {params.id}</h1>
    </div>
  )
}

export default Product