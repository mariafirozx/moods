import React, { use } from "react";
import {useAuth} from "./AuthContext"
import { Link } from "react-router-dom";

export default function AuthButtons(){
    const {user, loading, handleLoginForm, handleLogout} = useAuth();
    
    // console.log(user.user_metadata.picture);

    if(loading){
        //
    }
    // let listItems = topics.map((item, ii)=>{
    //     <li className="nav-item" key={ii}>
    //         <Link to={`/favorite/${item}`} className="nav-link">{item}</Link>

    //     </li>
    // })

   



    return(
        <>
           {user? (
            <>
            <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='nav-item ms-auto'>
                                <Link to="favorite/" className='nav-link'>Favorite</Link>

                                </li>

                                <li className="nav-item">

                                    {user? (
    
                                                    <button className="logout-button" onClick={handleLogout}>LOGOUT</button> 
                                                
                                            ):(
                                                <div></div>
                                    )}
                                </li>
                            </ul>

                            </div>

                 <div className="user-info d-flex align-items-center ms-3">

                    <span className="text-light displayName">Hi, {user.user_metadata.name.split(' ')[0]}!</span> 
                    <img className="userAvatar rounded-circle " src={user.user_metadata.picture} referrerPolicy="no-referrer"></img>  
                 </div>



                {/* <button className="logout-button" onClick={handleLogout}>LOGOUT</button> */}

            </>
            
        
        ): (
            <button className="login-button" onClick={handleLoginForm}>LOGIN</button>

        )}


        
        
        </>
    )
}