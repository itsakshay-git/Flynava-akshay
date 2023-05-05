import React from 'react'
import styles from './Romance.module.css'
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';

function Romance() {
  const {data} = useOutletContext();
  const filterdata = data.movies.filter((movie) => {
    return movie.genres.includes("Romance")
  })
  console.log(filterdata)
  return (
    <div>
      {filterdata.length ? (
        <>
            <div className={styles.title}>   
            <h3>ROMANCE</h3>
            </div>
            <div className={styles.home}>
              <MovieCard  movieData={filterdata}/>
            </div>
        </>
      ): <h1 className={styles.title}>No Movie Found</h1>}
    </div>
  )
}

export default Romance