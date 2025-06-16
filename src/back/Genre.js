import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import {options} from './BASE.js';

import Movie from './Movie.js';

export default function Genre({asDropdownItems, onGenreSelect}){

    const [genres, setGenres] = useState([]);
    const { genreId } = useParams(); // Assuming genreId is used to filter or fetch specific genres

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(res => res.json())
        .then(data => {setGenres(data.genres || [])})
        .catch(err => console.error('Error fetching genres:', err));
    },[genreId]) //

    if (asDropdownItems){
      

        return(
            <>
                    {genres.map((genre)=> (
                       
                        <Dropdown.Item 
                        eventKey={genre.id} 
                        key={genre.id}
                        onClick={() => onGenreSelect(genre.id)}
                        
                        >


                            {genre.name}
                        </Dropdown.Item>


                    ))}

                    

            </>
        )
    }
}