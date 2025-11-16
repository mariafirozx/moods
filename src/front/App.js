import React, { use } from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Login from '../back/Login';
import { AuthProvider, useAuth } from '../back/AuthContext';
import GlobalLoginModal from './GlobalLoginModal';
import TextInput from './TextInput';
import tvGif from '../assets/tvGif.gif'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from 'react-router';


export default function App(){
    return(
        <AuthProvider>
            <AppContent></AppContent>
        </AuthProvider>
    )
}

function AppContent() {
    const {showLogin, setShowLogin} = useAuth();
    const {user, handleLogout} = useAuth();

    // const [showForm, setShowForm] = useState(false);

    // function handleLoginForm(){
    //     setShowForm(true);

    // }

    // function handleCloseForm(){
    //     setShowForm(false);

    // }

// initMDB({ Ripple });
    return (
        <>
        <div className='grain-overlay'></div>
        <div className='bg-gif'></div>
            <div className='main'></div>
            <div className='content'>

                <div className='main-container'>
                        <Navbar 
                        title="Moods" 
                        ></Navbar>

                      <Outlet></Outlet>
                
                    
                </div>
                
                <footer className="contain">

                    <div className='icons'>
                            <a href='https://www.linkedin.com/in/marya-fairoz/' target='_blank'><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/mariafirozx" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                        <p className="text">
                            designed & created by maria.

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

             

            
            <GlobalLoginModal></GlobalLoginModal>
           
        </>
    )
}