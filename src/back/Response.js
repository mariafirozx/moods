export default async function Response(setPrediction, setinputMood, inputMood) {
    const API_BASE = process.env.REACT_APP_API_BASE_URL;
    try{

        const response  = await fetch(`${API_BASE}/api/process_input/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: inputMood})
            });

            if (!response.ok) {
                alert("Error fetching mood...")

            }
            if(!response){
                alert("Error fetching mood...")
            }

            
            const data = await response.json();
            
            setPrediction(data.prediction);
            if(!data.prediction){
                setPrediction('No result found');
            }
            console.log('mood result:', data.prediction);
            setinputMood('');

    }catch(err){

    }

}