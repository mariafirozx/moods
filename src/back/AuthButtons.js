import React, { use } from "react";
import {useAuth} from "./AuthContext"

export default function AuthButtons(){
    const {user, loading, handleLogin, handleLogout} = useAuth();

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
           {user? (
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        ): (
            <button className="login-button" onClick={handleLogin}>LOGIN</button>

        )}

        
        
        </>
    )
}