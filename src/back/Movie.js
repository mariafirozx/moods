import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { options } from './BASE.js';

import MovieList from '../front/MovieList.js';

export default function Movie({genreId}) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    // const { id } = useParams();

    useEffect(() => {
        if(!genreId) return;
        setLoading(true);

        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId.join(',')}`, options)
        .then(res => res.json())
        .then(data => {
            
            setMovie(data.results || []);
            setLoading(false);
        })
        .catch(err => console.error('Error fetching movie:', err));

    },[genreId]);

    if(loading){
        return(
             <div className="spinner-grow" role="status">
                <span className="sr-only"> hold on a min..</span>
            </div>

        )
    }
    if (!movie || Object.keys(movie).length === 0) {
        return <div>No movies found for your mood</div>

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
        <div className='movie-list-row'>
            {output}
        </div>


        </>
    )
}