import React from 'react';
import poster from '../assets/imgs/movieP.jpg';
import { useAuth } from '../back/AuthContext';
import { useState, useEffect } from 'react';
import Favorite from '../back/Favorite.js';
import { supabase } from '../back/Supbase.js';
import Popup from './Popup.js';

export default function MovieList({movieID, movieTitle, releaseDate, movieDescription, poster, fav, onDelete}) {
    const {handleFavIcon, user} = useAuth();

    const [isActive, setIsActive] = useState(false);
    const [popup, setPopup] = useState(false);
    const [popupActive, setPopupActive] = useState(false);

    const [isSelectFav, setisSelectFav] = useState(false);
    // const [showOverlay, setShowOverlay] = useState(false);
    //check db for mounting -- if fav movies exist ? keep the icon active in main movie list 

    useEffect(() =>{
        const fetchFav = async ()=>{
            if(!user) return;

            const {data, error} = await supabase
                .from('favMovies')
                .select('id')
                .eq('user', user.id)
                .eq('movieID', movieID)
                .maybeSingle(); //prevents 406 error -> meaning if more than one row

                if(data){
                    setIsActive(true);
                }


        }
        fetchFav();

    },[user, movieID])

    const handleHeartClick = async () => {
        console.log('Heart icon clicked!');
        const userActive = handleFavIcon();

        
        if (userActive) {
            console.log('User is logged in - adding to favorites');
            // fav logic here
            
            //ADD TO DB
        
            await Favorite(user.id, movieID, movieTitle, releaseDate, poster);
            setIsActive(true);
            setPopup(true);
            setPopupActive(true);
            setTimeout(()=> setPopupActive(false),2500);
            setTimeout(()=> setPopup(false), 3000);

            // setShowOverlay(true);


        }
        if(isActive){
            //unfav
            await supabase
                .from('favMovies')
                .delete()
                .eq('user', user.id)
                .eq('movieID', movieID)

            setIsActive(false);
            setPopup(true);
            setPopupActive(true);
            setTimeout(()=> setPopupActive(false),2500);
            setTimeout(()=> setPopup(false), 3000);
        }
  };
    return(
        <>
        
        <div className="card" style={{maxWidth: 340}}>
            <img src={poster} className="card-img-top" alt="..."></img>
            <div className="card-body">

                    <div className='card-header'>
                        <div className="rightTitle">
                        <h1 className="movie-title">{movieTitle}

                        <span className='release-date'>{releaseDate}</span>
                        </h1>

                        </div>
                        {/* <i class="favIcon bi bi-heart"></i> */}
                        <div className={`favIcon ${isActive ? 'active' : ' '}`} onClick={handleHeartClick} >
                            <i className= "bi bi-heart-fill"></i>

                        </div>

                    </div>
                    {/* <img className='favIcon' width="24" height="24" src="https://img.icons8.com/plumpy/24/hearts.png" alt="hearts"/> */}
               
                 {/* <h5 className='release-date'>{releaseDate}</h5> */}
                 <p className="movie-text description">{movieDescription}</p>
                 <p className="movie-text"><small className="text-muted">movie review: Letterboxd</small></p>

                
            </div>

            {fav && (
                <div className='deleteOverlay'>
                    <div className='deletebtn'>
                        <i class="bi bi-x-circle-fill" onClick={onDelete}></i>
                    </div>
                    
                </div>
            )}

        </div>

        <div>
            {popup && ( <Popup active={popupActive} tagline={isActive? "Added to favorites": "Removed from favorites"}></Popup>

            )}
        </div>

        

       
           
        </>
    )

}
