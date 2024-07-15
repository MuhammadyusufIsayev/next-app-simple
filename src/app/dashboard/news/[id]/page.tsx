import React from 'react'

const SingleNews = ( {params}: {params: {id: string}}) => {
  return (
    <div>
      <h1>News {params.id}</h1>
    </div>
  )
}

export default SingleNews