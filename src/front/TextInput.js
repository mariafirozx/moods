import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function TextInput(){

    const [inputMood, setinputMood] = useState('');
    const [result, setResult] = useState();
    const textInputRef = useRef(null);

    const handleSubmit = async (e)  => {
        e.preventDefault();
        setResult(null);
        try{

            const response  = await fetch('http://localhost:8000/api/process_input/',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: inputMood})
            });

            if (!response.ok) {
                

            }
            const data = await response.json();
            
            setResult(data.result);
            if(!data.result){
                setResult('No result found');
            }
            console.log('mood result:', data.result);
            setinputMood('');

        }catch(err){

        }

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

        <div className="mt-3">
            {result && (
                <div className='movie-list'>
                    <p>{result}</p>
                </div>
            )}

        </div>
    </div>
        
        
        </>
    )
}