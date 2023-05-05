import React, { useState } from 'react';
import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const MovieCard = ({movieData}) => {
    const navigate = useNavigate();
    const handler = ( movie) =>{
        console.log(movie.title)
        navigate(`/Moviedetails?title=${movie.title}`);
    }
  return (
    <>
        {movieData.map((movie) => {
            return(
                <div className={styles.poster} onClick={() => handler(movie)}>
                    <img className={styles.poster} key={movie.id} src={movie.poster} alt="poster" />
                </div>
            )
        })}
    </>
  )
} 

export default MovieCard