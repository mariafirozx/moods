import React from 'react';
import poster from '../assets/imgs/movieP.jpg';

export default function MovieList({movieTitle, movieDescription, poster}) {
    return(
        <>
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={poster} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="movie-title">{movieTitle}</h5>
                        <p className="movie-text">{movieDescription}</p>
                        <p className="movie-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}