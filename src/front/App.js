import React from 'react';
import Navbar from './Navbar';
import TextContainer from './TextContainer';
import MovieList from './MovieList';

import TextInput from './TextInput';

export default function App() {
    const isVisible = false;
    return (
        <>
            <div className="bg">
                <Navbar title="Moods"></Navbar>

                
                <div className="container mb-5 mt-5 p-5">
                
                    <div className="row">
                        <div className="col-md-12 d-flex  flex-column align-items-center custom-align">
                            <p className="title lead text-center">Hey stranger!</p>
                            <p className="bottomText h5 mt-10 text-center">What are you in mood of?</p>

                            <TextInput />
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
            </div>
        </>
    )
}