import React from 'react';
import Navbar from './Navbar';


import TextInput from './TextInput';
import tvGif from '../assets/tvGif.gif'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App() {

// initMDB({ Ripple });
    const isVisible = false;
    return (
        <>
        
            
            <div className='main'></div>

            <div className='content'>

                <div className='main-container'>
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
                

                <footer className="contain">

                    <div className='icons'>
                            <a href='https://www.linkedin.com/in/marya-fairoz/' target='_blank'><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/mariafirozx" target='_blank'><i className="bi bi-github"></i></a>

                    </div>
                    
                        <p className="text">
                            designed & created by zahra.

                        </p>

                        

                </footer>

                    
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
            
            

           
        </>
    )
}