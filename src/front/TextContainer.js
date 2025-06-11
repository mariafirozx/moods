import React from "react"
import { Dropdown } from "react-bootstrap";


// This is a placeholder component for TextContainer -- takes input from the user

// TODO = for now: drop down with movie categories
// TODO = later: text input for user to enter their own text
export default function TextContainer(){
    return(
        <>
        <Dropdown className="btn-group">
           <Dropdown.Toggle className="btn btn-secondary btn-lg" aria-expanded="false" >
                Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item className="dropdown-item" href="#">Horror</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#">Romance</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#">Family</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#">Comedy</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#">Science Fiction</Dropdown.Item>
                <Dropdown.Item  className="dropdown-item" href="#">Music</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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