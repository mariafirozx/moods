import React from "react";

export default function FormInput({handleSubmit, inputMood, handleChange, textInputRef}){
    return(
        <form className="form" style={{width: "100%", maxWidth: "40rem",}} onSubmit={handleSubmit}>
            <input className="form-control form-control-lg mt-5" type="text" placeholder="how are you feeling today"  
            value={inputMood} onChange={handleChange} ref={textInputRef}
            >

            </input>

    
        </form>

    )
}