import React from 'react';
import styles from './MoviesDetails.module.css';
import { useOutletContext } from 'react-router-dom';


const MovieDetails = () => {
  const {data} = useOutletContext();
    const getParams = new URLSearchParams(window.location.search).get("title")
    console.log(typeof getParams)

    const filterdata = data.movies.filter((movie) => {
        return movie.title === getParams;
      })
      console.log(filterdata[0].poster)

  return (
    <div className={styles.detailbox}>
        <div className={styles.moviecard}>
        <img  key={filterdata[0].id} src={filterdata[0].poster} alt="poster" />
        </div>
        <div className={styles.moviecard}>
            <h4>{filterdata[0].title}</h4>
            <span className={styles.imdb}>IMDb</span><span>{filterdata[0].imdb_rating}</span>   <span>{filterdata[0].length}</span>
            <p>{filterdata[0].overview}</p>
            <p>Genres: <span className={styles.highlight}>{filterdata[0].genres}</span> </p>
            <p>Stars: <span className={styles.highlight}>{filterdata[0].cast}</span></p>
            <p>Director: <span>{filterdata[0].director}</span></p>
        </div>
    </div>
  )
}

export default MovieDetails