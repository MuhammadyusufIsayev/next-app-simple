import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <Link className='text-bold text-center text-[20px] ml-[10px]'  href="/">Home</Link>
      <Link className='text-bold text-center text-[20px] ml-[10px]' href="/dashboard/blog">Blog</Link>
      <Link className='text-bold text-center text-[20px] ml-[10px]' href="/dashboard/categories">Categories</Link>
      <Link className='text-bold text-center text-[20px] ml-[10px]' href="/dashboard/products">Products</Link>
      <Link className='text-bold text-center text-[20px] ml-[10px]' href="/dashboard/news">News</Link>
    </div>
  )
}

export default Dashboard