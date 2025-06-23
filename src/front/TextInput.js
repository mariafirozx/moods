import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function TextInput(){

    const [inputMood, setinputMood] = useState('');
    const textInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setinputMood(textInputRef.current.value);
        textInputRef.current.value = '';
        console.log(inputMood);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setinputMood(textInputRef.current.value);
       
    }

    return(
        <>

    <div className="d-flex flex-column align-items-center" style={{width: '100%'}}> 
        <form className="form" style={{width: "100%", maxWidth: "40rem"}} onSubmit={handleSubmit}>
            <input className="form-control form-control-lg mt-5" type="text" placeholder="tell me..."  
            value={inputMood} onChange={handleChange} ref={textInputRef}
            >

            </input>
    
        </form>
    </div>
        
        
        </>
    )
}