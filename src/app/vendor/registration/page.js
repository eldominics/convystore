'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import getVendors from "@/app/util/getvendors"
import { useRouter } from "next/navigation"

export default function VendorRegister(){

    const Router = useRouter()
    const [vendorInfo, setvendorInfo] = useState({
        "surname": "",
        "firstname":"",
        "lastname":"",
        "storename":"",
        "phone":"",
        "password": "",
        "email": ""
        
    })


    // useEffect(() =>{
    //     async function all(){
    //         const response = await getVendors()
    //         .catch(error => "couldn't fetch the data")
    //         console.log(response)
    //     }
    //     all()

    // }, []
    // )

    
    
    const changeHandler = (event) =>{
        const {name ,value}= event.target
        
        setvendorInfo(prevVendorInfo =>{
            return {
                ...prevVendorInfo,
                [name] : value
            }

        })
    }

    async function submitForm(event){
        event.preventDefault()

        const response = await fetch("http://localhost:8080/vendor/registration", {
            body: JSON.stringify(vendorInfo), 
            method:"POST",
            headers: {"content-type": "application/json", 
            'Access-Control-Allow-Origin': 'http://localhost:3000', 
            }
        })
        if(!response.ok){throw new Error("Ewee Could not make this request to the server " + response.status )}
        if(response.ok){
            console.log("congratulations, you are now a vendor")
            Router.push('login')
        }
    
        

        
    }
    

    // async function submitForm(event){
    //     event.preventDefault()

    //     const response = await fetch("http://localhost:8080/vendor/registration", {
    //         body: JSON.stringify(vendorInfo), 
    //         method:"POST",
    //         headers: {"content-type": "application/json", 
    //         'Access-Control-Allow-Origin': 'http://localhost:3000', 
    //         }
    //     }).then(async response =>{
    //         if(!response.ok){throw new Error("Ewee Could not make this request to the server " + response.status )}
    //         await response.json()
    //         console.log(response)
    //         return response.json()
            
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    //     .finally(() =>{
    //         Router.push("login")
    //     })
                  
    // }


    return(
        <>
            <form onSubmit={submitForm}>

                <p><label> Surname </label> <input type="text" name="surname"  onChange={changeHandler}></input></p>
                <p><label> First Name </label> <input type="text" name="firstname"  onChange={changeHandler}></input></p>
                <p><label> Last Name </label> <input type="text" name="lastname"  onChange={changeHandler}></input></p>
                <p><label> Phone </label> <input type="number" name="phone"  onChange={changeHandler}></input></p>
                {/* <p><label> Date Of Birth </label> <input type="date" name="birth" min={1900} max={2023} onChange={changeHandler}></input></p> */}
                <p><label> A name for your store </label> <input type="text" name="storename" onChange={changeHandler}></input></p>
                <p> <label> Password</label> <input type="password" name = "password" onChange={changeHandler}></input></p>
                <p><label>email</label> <input type="email" name="email" onChange={changeHandler}></input></p>
                <br></br>
                <button type="submit"> Create account</button>

                <h2>Already have an account? <Link href={"login"}> Sign in</Link></h2>
                

            </form>
            

            


        </>
    )
        

    
}