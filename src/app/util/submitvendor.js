
async function submitForm({data}){

    
    try{

        
        const response = await fetch("http://localhost:8080/vendor/registration", {
            body: JSON.stringify(data), 
            method:"POST",
            headers: {"content-type": "application/json", 
            'Access-Control-Allow-Origin': 'http://localhost:3000' 
            }
        })

        if(!response.ok){throw new Error("Could not make this request to the server " + response.status )}
        return response.json()
        
    }catch(error){
        console.log(error)
    }
}

export default submitForm