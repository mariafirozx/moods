import React, { use } from "react";
import {useAuth} from "./AuthContext"

export default function AuthButtons(){
    const {user, loading, handleLoginForm, handleLogout} = useAuth();
    

    if(loading){
        //
    }

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
                     <li><a href="#">My Favorites</a></li>
                 </ul>
                <span className="text-light displayName">Hi, {user.user_metadata.name.split(' ')[0]}!</span>
                <img className="userAvatar rounded-circle" src={user.user_metadata.picture}></img>

                {/* <button className="logout-button" onClick={handleLogout}>LOGOUT</button> */}


            </div>
        ): (
            <button className="login-button" onClick={handleLoginForm}>LOGIN</button>

        )}

        </div>

        
        
        </>
    )
}