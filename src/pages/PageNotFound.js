import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/image.jpg'
export const PageNotFound = () => {

  useEffect(()=>{
    document.title = 'Page Not Found';
  })
  return (
    <main >
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-6xl font-bold text-grey-500 m-4 dark:text-white'>Page Not Found!</p>
          <div className='max-w-lg'><img className='w' src={image} alt="PageNotFound"/></div>
        </div>
        <div className='flex justify-center my-6' >
          <Link to="/">
          <button className='w-64 h-12 text-white text-2xl text-bold rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>Go Home</button>
          </Link>
        </div>
      </section>
    </main >
  )
}
