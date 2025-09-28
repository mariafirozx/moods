import React from "react";

import TextInput from './TextInput';
import tvGif from '../assets/tvGif.gif'
import FormInput from "./FormInput";
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Response from '../back/Response';
import Movie from '../back/Movie';


export default function Home({onFav}){
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
    
    return(
        <>
        <div className="container">
                            
                                    <div className="col-md-12 d-flex  flex-column align-items-center custom-align">
                                        <div className="el align-items-center custom-align">

                                            <div className='tvGif '>
                                                <img className='gif' src={tvGif}></img>
                                            </div>
                                            <p className="title lead text-center">Hey stranger!</p>
                                            {/* <p className="bottomText h5 mt-10 text-center">How are you feeling today?</p> */}
                                            <FormInput
                                                handleSubmit={handleSubmit}
                                                inputMood={inputMood}
                                                handleChange={handleChange}
                                                textInputRef={textInputRef}
                                            >

                                            </FormInput>
                                        </div>
                                        {/* <TextInput/>  */}
            
                                         <div className="d-flex flex-column align-items-center" style={{width: '100%'}}> 
                                        
                                                <div  className="mt-3">
                                        
                                                    <div ref={movieList} id='movie-list'>
                                        
                                                        {prediction && (
                                                            <div>
                                                                
                                                                {/* <p>{prediction}</p> */}
                                                                {/* <Genre mood={prediction} onGenreId={setGenreId}/> */}
                                                            {/* <MovieGenreView mood={prediction}></MovieGenreView> */}
                                                            <Movie mood={prediction} onScroll={scroll} onFav={onFav}></Movie>
                                                            
                                                                
                                                            </div>
                                                            
                                                        )}
                                                    </div>
                                                    
                                                </div>
                                        
                                               
                                            </div>
                                        {/* <TextContainer /> */}
        
                                    </div>
                                
                                <div className="row mt-5">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        {/* <MovieList 
                                        movieTitle="Scarface" 
                                        movieDescription="Watch this classic. Even if you are depressed to your soul. LOL"
                                        /> */}
                                    </div>
                                </div>
                            
                            
        
            </div>
        </>
    )
}