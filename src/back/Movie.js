import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { options } from './BASE.js';

import MovieList from '../front/MovieList.js';

export default function Movie({genreId}) {
    const [movie, setMovie] = useState([]);
    // const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, options)
        .then(res => res.json())
        .then(data => setMovie(data.results || []))
        .catch(err => console.error('Error fetching movie:', err));

    },[genreId]);

    if (!movie || Object.keys(movie).length === 0) {
        return <div className="spinner-grow text-dark m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

    }

    const output = movie.map((m) => (
        <MovieList 
            key={m.id}
            poster={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            movieTitle={m.title} 
            movieDescription={m.overview || "No description available."}
        />
    ));

    return(
        <>
        <div>
            {output}
        </div>


        </>
    )
}