import axios from "axios"



const getVendors = async () =>{
    
    const response = await fetch("http://localhost:8080/vendor/getvendors", {
        
        method: "GET", 
        headers: {"content-type": "application/json", 
            'Access-Control-Allow-Origin': 'http://localhost:8080', 
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'}
    })

    const vendors = await response.json()
    return vendors

} 

export default getVendors