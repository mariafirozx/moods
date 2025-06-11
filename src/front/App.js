import React from 'react';
import Navbar from './Navbar';
import TextContainer from './TextContainer';
export default function App() {
    return (
        <>
            <div className="bg">
                <Navbar title="Moods"></Navbar>
                <div className="container mb-5 mt-5 p-5">
                    <div className="row">
                        <div className="col-md-12 d-flex  flex-column align-items-center custom-align">
                            <p className="title lead text-center">Hey stranger!</p>
                            <p className="bottomText h5 mt-10 text-center">What are you in mood of?</p>

                            <TextContainer />

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}