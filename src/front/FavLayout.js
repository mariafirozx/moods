import { Outlet } from "react-router";

export default function FavLayout(){
    return(
        <>
         <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center custom-align">
          <h2 className="title lead text-center">Your Favorites</h2>
          <p className="bottomText h5 mt-10 text-center">Your liked movies will show up here...</p>

          {/* Nested Favorites page renders here */}
          <Outlet />
        </div>
      </div>
    </div>
        </>
    )
}