import React from 'react';
import Navbar from './Navbar';
// import TextContainer from '../../TextContainer';
import MovieList from './MovieList';

import TextInput from './TextInput';
import tvGif from '../assets/tvGif.gif'

export default function App() {
    const isVisible = false;
    return (
        <>
        
            
            <div className='main'></div>

            <div className='content'>
                <Navbar title="Moods"></Navbar>

               
                
                <div className="container mb-5 mt-5 p-5">
                
                    <div className="row">
                        <div className="col-md-12 d-flex  flex-column align-items-center custom-align">
                            <p className="title lead text-center">Hey stranger!</p>
                            <p className="bottomText h5 mt-10 text-center">How are you feeling today?</p>

                             <div className='tvGif'>
                                <img className='gif' src={tvGif}></img>
                             </div>
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


            <svg>
                <filter id='noiseFilter'>
                    <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='0.6' 
                        stitchTiles='stitch'/>
                    <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                </filter>
  
            </svg>
             {/* <svg>
                <filter id='noiseFilter'>
                    <feTurbulence
                    
                    type='fractalNoise'
                    baseFrequency={0.6}
                    stitchTiles={'stitch'}></feTurbulence>

                    <feColorMatrix in='colorNoise' type='matrix' 
                    values='0.2 0 0 0 0.06
                            0 0.15 0 0 0.03
                            0 0 0.1 0 0.02
                            0 0 0 1 0'
          ></feColorMatrix>
                    <feComposite operator={"in"} in2={"SourceGraphic"} result='monoNoise'></feComposite>
                    <feFlood floodColor='#100c06' result='bgColor'></feFlood>
                    <feBlend in='bgColor' in2="monoNoise" mode='screen'></feBlend>
                </filter>
            </svg> */}

            

           
        </>
    )
}