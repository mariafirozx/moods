import { Form } from "react-router";
import React from 'react';
import {useState, useEffect}  from 'react';

export default function LoginForm({onClose}){

    return(

        <>
            <div className="formContainer">

                <div className="cardForm">
                    <div className="head">Continue with google...
                        <i className="bi bi-x" onClick={onClose}></i>
                    </div>
                        <div className="FormContent"> Hey cinephile! dont leave just yet... to save your mood pick login 
                            to continue enjoying the full experience!
                            <br />
                            <button className="logBtn">
                                <img className="googleIcon" width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                                Sign in with Google

                            </button>
                        </div>
                </div>

            </div>
        </>
    )
}