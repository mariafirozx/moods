export default async function Response(setPrediction, setinputMood, inputMood) {
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
            
            setPrediction(data.prediction);
            if(!data.prediction){
                setPrediction('No result found');
            }
            console.log('mood result:', data.prediction);
            setinputMood('');

    }catch(err){

    }

}