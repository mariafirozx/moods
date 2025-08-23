import React from 'react';
import poster from '../assets/imgs/movieP.jpg';
import { useAuth } from '../back/AuthContext';

export default function MovieList({movieTitle, releaseDate, movieDescription, poster}) {
    const {handleFavIcon} = useAuth();

    
  const handleHeartClick = () => {
    console.log('Heart icon clicked!');
    const canProceed = handleFavIcon();
    if (canProceed) {
      console.log('User is logged in - adding to favorites');
      // Your favorite logic here
    }
  };
    return(
        <>
        
        <div className="card" style={{maxWidth: 340}}>
            <img src={poster} className="card-img-top" alt="..."></img>
            <div className="card-body">

                    <div className='card-header'>
                        <h1 className="movie-title">{movieTitle}

                        <span className='release-date'>{releaseDate}</span>
                        </h1>
                        {/* <i class="favIcon bi bi-heart"></i> */}
                        <i className="favIcon bi bi-heart-fill" onClick={handleHeartClick}></i>

                    </div>
                    {/* <img className='favIcon' width="24" height="24" src="https://img.icons8.com/plumpy/24/hearts.png" alt="hearts"/> */}
               
                 {/* <h5 className='release-date'>{releaseDate}</h5> */}
                 <p className="movie-text description">{movieDescription}</p>
                 <p className="movie-text"><small className="text-muted">movie review: Letterboxd</small></p>

                
            </div>
        </div>
       
            {/* <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={poster} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="movie-title">{movieTitle}</h1>
                            <h5 className='release-date'>{releaseDate}</h5>
                            <p className="movie-text">{movieDescription}</p>
                            <p className="movie-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        
        </>
    )

}