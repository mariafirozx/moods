import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import {options} from './BASE.js';

import Movie from './Movie.js';
import Map from './Map.js';

export default function Genre({mood}){

    const [genres, setGenres] = useState([]);
    const { genreId } = useParams(); // Assuming genreId is used to filter or fetch specific genres

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(res => res.json())
        .then(data => {setGenres(data.genres || [])})
        .catch(err => console.error('Error fetching genres:', err));
    },[genreId]) 

    const mapID = Map(mood);

    const filterGenre = genres.filter(genre => mapID.includes(genre.id));


    return (
        <>
        
        {filterGenre.length > 0 ? (
            filterGenre.map(genre => (
                <div key={genre.id}> {genre.name}</div>
            ))
        ): (
            <div>no genre found for this mood</div>
        )
        }
        
        
        </>
    )

    // const genreID = genres.map((genre) => (
    //     console.log(genre.id)
    // ))
    // // const genreID = genres.map((genre)=>(

    // //     //display genre on mood



        
    // // ))

    // return genreID;
    
    // if(onGenreSelected){
    //     return(
    //         <>
    //                 {genres.map((genre) => (
    //                     <div key={genre.id}>
                            
                          
    //                     </div>
    //                 ))}

                    

                    
                       
                        
    //                     {/* // eventKey={genre.id} 
    //                     // key={genre.id}
    //                     // onClick={() => onGenreSelect(genre.id)}
                        
                        


    //                         // {genre.name} */}
                        


                
    //         </>
    //     )
    // }
    
}