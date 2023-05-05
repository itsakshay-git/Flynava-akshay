import React from 'react'
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Topimdb.module.css'

const Topimdb = () => {
  const {data} = useOutletContext();
  const filterdata = data.movies.filter((movie) => {
    return movie.imdb_rating > 8;
  })
  console.log(filterdata)
  return (
    <div>
      {filterdata.length ? (
        <>
            <div className={styles.title}>   
            <h3>TOP IMDB</h3>
            </div>
            <div className={styles.home}>
              <MovieCard  movieData={filterdata}/>
            </div>
        </>
      ): <h1 className={styles.title}>No Movies Found</h1>}
    </div>
  )
}

export default Topimdb