import React from 'react'

const SingleBlog = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h1>Blog {params.id}</h1>
    </div>
  )
}

export default SingleBlog