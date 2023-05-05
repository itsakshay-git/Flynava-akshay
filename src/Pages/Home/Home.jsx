import React from 'react'
import { useOutletContext } from "react-router-dom";
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.css'

const Home = () => {
  const {isLoggedIn, data} = useOutletContext();
  console.log(isLoggedIn, data.movies)
  return (
    <>
    <div className={styles.title}>   
    <h3>HOME</h3>
    </div>
    <div className={styles.home}>
      <MovieCard  movieData={data.movies}/>
    </div>
    </>
  )
}

export default Home