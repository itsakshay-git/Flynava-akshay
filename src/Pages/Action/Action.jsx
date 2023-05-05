import React from 'react'
import { useOutletContext } from 'react-router-dom';
import styles from './Action.module.css'
import MovieCard from '../../components/MovieCard/MovieCard';

const Action = () => {
  const {data} = useOutletContext();
  const filterdata = data.movies.filter((movie) => {
    return movie.genres.includes("Action")
  })
  console.log(filterdata)
  return (
    <div>
      {filterdata.length ? (
        <>
            <div className={styles.title}>   
            <h3>ACTION</h3>
            </div>
            <div className={styles.home}>
              <MovieCard  movieData={filterdata}/>
            </div>
        </>
      ): <h1 className={styles.title}>No Movies Found</h1>}
    </div>
  )
}

export default Action