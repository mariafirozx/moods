import React from "react";

import TextInput from './TextInput';
import tvGif from '../assets/tvGif.gif'

export default function Home(){
    return(
        <>
        <div className="container">
                            
                                <div className="row">
                                    <div className="col-md-12 d-flex  flex-column align-items-center custom-align">
                                        <p className="title lead text-center">Hey stranger!</p>
                                        {/* <p className="bottomText h5 mt-10 text-center">How are you feeling today?</p> */}
        
                                        <div className='tvGif'>
                                            <img className='gif' src={tvGif}></img>
                                        </div>
            
                                        <TextInput/> 
                                        {/* <TextContainer /> */}
        
                                    </div>
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