import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import notfoundimage from '../assets/imagenotfound.jpg'
import {useTitle} from '../hooks/useTitle'

export const MovieDetail = () => {
  const params = useParams();
  const [Movie, setMovie] = useState({});

  const imageLink = Movie.poster_path ? `https://image.tmdb.org/t/p/w500/${Movie.poster_path}`: notfoundimage ;

  useTitle(Movie.title)
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=640e522cb1068a7eb7dc42712ed61145`)
      const json = await response.json();
      setMovie(json)
    }
    fetchMovies();
  }, [])
  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'><img className=' rounded' src={imageLink}/></div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold py-3 '>{Movie.title}</h1 >
          <p className='my-4'>{Movie.overview}</p>

          {Movie.genres ? (
            <p className='my-7 flex flex-wrap gap-2'>
              {Movie.genres.map((genre) => (
                <span key={genre.id} className='mr-3 border border-gray-200 rounded dark:border-gray-700 p-2'>{genre.name}</span>

              ))}
            </p>) : " "}
            
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{Movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm text-gray-900 dark:text-white">{Movie.vote_count} Reviews</span>
          </div>
                <p className='my-4 text-base text-gray-900 dark:text-white' >Popularity: {Movie.popularity} </p>
                <p className='my-4 text-base text-gray-900 dark:text-white' >Playtime: {Movie.runtime} min. </p>
                <p className='my-4 text-base text-gray-900 dark:text-white' >Release Date: {Movie.release_date} </p>
                <p className='my-4 text-base text-gray-900 dark:text-white' >Language: {Movie.original_language} </p>
          </div>
      </section>
    </main>
  )
}
