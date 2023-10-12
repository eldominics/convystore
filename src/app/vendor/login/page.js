'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import getVendors from "@/app/util/getvendors"
import { useRouter } from "next/navigation"
  

const getVendor = async (username) =>{

    const response = await fetch("http://localhost:8080/vendor/getvendor/"+username, {
        
        method: "GET", 
        headers: {"content-type": "application/json", 
            'Access-Control-Allow-Origin': 'http://localhost:8080', 
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'}
    }) 
    return response.json()
   
} 


const  VendorLogin= () => {

    const Router = useRouter()
    const [vendor, setVendor] = useState() //context
    const [vLoginDetails, setVLoginDetails] = useState({
        username: '',
        password: ''
    })


    const handleSubmit = async(event) =>{
        event.preventDefault() 
        const theV = await getVendor(vLoginDetails.username)

        setVendor(theV)
        console.log(vendor)
            
        if(vendor.storename === vLoginDetails.username && vendor.password === vLoginDetails.password){
            sessionStorage.setItem("vendor", vendor.storename)
            Router.push('home')
            console.log("worked") 
        }
    }

    const handleChange = (event)=>{
        const {name ,value}= event.target
        
        setVLoginDetails(prevVLoginDetails =>{
            return {
                ...prevVLoginDetails,
                [name] : value
            }

        })
    }


    return ( 
        <>
            <form onSubmit={(e) => handleSubmit(e)}> 
                <p><label> Username</label> <input type="text" name="username" onChange={handleChange}></input></p>
                <p><label>Password</label> <input type="password" name="password" onChange={handleChange}></input></p><br></br>

                <button type="submit"> Submit</button>

                <h2>Don't have an account? <Link href={'registration'}> Sign up</Link></h2>
                

                
            </form>
        </>
     );
}
 
export default VendorLogin;