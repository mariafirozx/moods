import React from "react"
import { Dropdown } from "react-bootstrap";
import Genre from "./src/back/Genre.js";
import Movie from "./src/back/Movie.js";


// This is a placeholder component for TextContainer -- takes input from the user

// TODO = for now: drop down with movie categories
// TODO = later: text input for user to enter their own text
export default function TextContainer(){
    const [seletedGenreId, setSelectedGenreId] = React.useState(null);

    function handleClick(genreId){
        setSelectedGenreId(genreId);
        console.log('clicked', genreId);

    }
    return(
        <>
        <Dropdown className="btn-group">
           <Dropdown.Toggle className="btn btn-secondary btn-lg" aria-expanded="false" >
                Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    <Genre asDropdownItems onGenreSelect={handleClick}/>
                {/* <Dropdown.Item eventKey="Horror" className="dropdown-item" href="#">Horror</Dropdown.Item>
                <Dropdown.Item  eventKey="Romance" className="dropdown-item" href="#">Romance</Dropdown.Item>
                <Dropdown.Item eventKey= "Family"className="dropdown-item" href="#">Family</Dropdown.Item>
                <Dropdown.Item eventKey= "Comedy"className="dropdown-item" href="#">Comedy</Dropdown.Item>
                <Dropdown.Item eventKey="Science Fiction" className="dropdown-item" href="#">Science Fiction</Dropdown.Item>
                <Dropdown.Item eventKey="Music" className="dropdown-item" href="#">Music</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
        {seletedGenreId && <Movie genreId={seletedGenreId} />}

        {/* <Genre /> */}
        {/* <div className="btn-group">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genre
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item">Horror</a></li>
                <li><a className="dropdown-item">Romance</a></li>
                <li><a className="dropdown-item">Family</a></li>
                <li><a className="dropdown-item">Comedy</a></li>
                <li><a className="dropdown-item">Science Fiction</a></li>
                <li><a className="dropdown-item">Music</a></li>

            </ul>
        </div> */}
        </>
    )
}