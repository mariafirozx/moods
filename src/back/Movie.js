import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { options } from './BASE.js';

import MovieList from '../front/MovieList.js';
import Genre from './Genre.js';
import LoginForm from '../front/LoginForm.js';

export default function Movie({mood, onScroll, onFav}) {
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState(null)
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const { id } = useParams();

    useEffect(() => {
        if(!genre || genre.length === 0) return;
        
         //initiliaze empty movie map
        const movieMap = new Map(); // to remove dups

        const fetchMovies = async () => {

            setIsLoading(true);
            setError(null);

            try{
                for( const id of genre){

                    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`, options)

                    if(!res.ok) throw new Error('failed to fetch');
                    const data = await res.json();

                    (data.results || [] ).forEach(movie => {
                        if(!movieMap.has(movie.id)){ //if the map does not contain the movie id; set the movie n id in map;; hence remove  dups
                            movieMap.set(movie.id, movie)
                        }
                        
                    });

                //    allMovies.push(...(data.results || []));
                }

                setMovie(Array.from(movieMap.values())); //convert map vals to array
                
                if(onScroll){
                    onScroll();
                }

                // setLoading(false);
            
            }catch(err){
                console.error('err', err);
                setError('failed to load movies');

            }finally{
                setIsLoading(false);
            }
        }

        fetchMovies();
    },[genre]);

    // if(isloading){
    //     return(
    //          <div className="spinner-grow" role="status">
    //             <span className="sr-only"> hold on a min..</span>
    //         </div>

    //     )
    // }
    // if (!movie || Object.keys(movie).length === 0) {
    //     return <div>No movies found for your mood</div>

    // }

    const output = movie.map((m) => (
        <MovieList 
            key={m.id}
            poster={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            movieTitle={m.title} 
            releaseDate={m.release_date.slice(0,4)}
            movieDescription={m.overview || "No description available."}
            onFav={onFav}
        />
    ));

    return(
        <>

        <div>
            <Genre mood={mood} onGenreId={setGenre}></Genre>
        </div>

        {isloading && (
             <div className='spinner-container'>
                <div className="spinner-grow" role="status"></div>
                    <span className="sr-only"> fetching your mood... </span>

            </div>

        )}


        {!isloading && movie.length > 0 && (
            
            <div className='movie-list-row'>
                {output}
            </div>

)}

    {/* {!isloading && movie.length === 0 && (
        <div>No movies found for your mood</div>
    )} */}

        </>
    )
}