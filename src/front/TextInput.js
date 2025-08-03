import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Response from '../back/Response';
import Genre from '../back/Genre';
import poster from '../assets/imgs/movieP.jpg';


import MovieGenreView from './MovieGenreView';
import Movie from '../back/Movie';

import MovieList from './MovieList';

export default function TextInput(){

    const [inputMood, setinputMood] = useState('');
    const [prediction, setPrediction] = useState();
    
    
    const textInputRef = useRef(null);
    const movieList = useRef(null);


    const handleSubmit = async (e)  => {
        try{
            e.preventDefault();
            setPrediction(null);
            Response(setPrediction, setinputMood, inputMood);

            // scrollIntoView();

            
            // try{

        //     const response  = await fetch('http://localhost:8000/api/process_input/',{
        //         method: 'POST',
        //         headers:{
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({text: inputMood})
        //     });

        //     if (!response.ok) {
                

        //     }
        //     const data = await response.json();
            
        //     setPrediction(data.prediction);
        //     if(!data.prediction){
        //         setPrediction('No result found');
        //     }
        //     console.log('mood result:', data.prediction);
        //     setinputMood('');

        // }catch(err){

        // }

        }catch(err){
            console.log(err);
        }


    }
    
    const handleChange = (e) => {
        e.preventDefault();
        setinputMood(textInputRef.current.value);
        
    }

    const scroll = () =>{
        if(movieList.current){
            movieList.current.scrollIntoView({behavior: 'smooth'})
            console.log('working');
        }
    }

    // useEffect(() => {
    //     if(prediction && movieList.current){
    //         movieList.current.scrollIntoView({behavior: 'smooth'})
    //     }
    // }, [prediction]);
    
    // useEffect(()=>{

    //     scrollIntoView, []
    //     // if(movieList.current){
    //     //     movieList.current.scrollIntoView({
    //     //         behavior: 'smooth'
    //     //     })
    //     // }
    // })
    
    return(
        <>

    <div className="d-flex flex-column align-items-center" style={{width: '100%'}}> 
        <form className="form" style={{width: "100%", maxWidth: "40rem"}} onSubmit={handleSubmit}>
            <input className="form-control form-control-lg mt-5" type="text" placeholder="tell me..."  
            value={inputMood} onChange={handleChange} ref={textInputRef}
            >

            </input>

    
        </form>

        {/* <MovieList

        poster={poster}
        movieTitle={'Scarface'}
        releaseDate={'2001'}
        movieDescription={
            'He loved the American Dream. With a vengeance. After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami'}
        
        ></MovieList> */}


        <div  className="mt-3">

            <div ref={movieList} id='movie-list'>

                {prediction && (
                    <div>
                        
                        {/* <p>{prediction}</p> */}
                        {/* <Genre mood={prediction} onGenreId={setGenreId}/> */}
                    {/* <MovieGenreView mood={prediction}></MovieGenreView> */}
                    <Movie mood={prediction} onScroll={scroll}></Movie>
                    
                        
                    </div>
                    

                    
                )}
            </div>
            

        
        </div>

       
    </div>
        
        
        </>

     
    )

}