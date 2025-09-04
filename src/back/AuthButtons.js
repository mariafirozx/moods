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

   

//     return (
//     <div className="auth-buttons">
//       {user ? (
//         <div className="d-flex align-items-center">
//           <span className="text-light me-3">Hi, {user.email}</span>
//           <button className="btn btn-outline-light" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button className="btn btn-outline-light" onClick={handleLogin}>
//           Login
//         </button>
//       )}
//     </div>
//   );
    return(
        <>
        <div>
           {user? (
            <div className="d-flex nav-right">
                <ul>
                    <li className='nav-item'>
                     <Link to="favorite/" className='nav-link'>Favorite</Link>

                    </li>
                     {/* <li><a href="#Favorites">My Favorites</a></li> */}
                 </ul>
                 <div className="user-info">

                    <span className="text-light displayName">Hi, {user.user_metadata.name.split(' ')[0]}!</span> 
                    <img className="userAvatar rounded-circle " src={user.user_metadata.picture} referrerPolicy="no-referrer"></img>  
                 </div>


                {/* <button className="logout-button" onClick={handleLogout}>LOGOUT</button> */}


            </div>
        ): (
            <button className="login-button" onClick={handleLoginForm}>LOGIN</button>

        )}

        </div>

        
        
        </>
    )
}