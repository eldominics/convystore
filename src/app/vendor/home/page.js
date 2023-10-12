                                                                                                                                                                    'use client'


import { useState } from 'react';
import Dashboard from "../Dashboard"
import LoginRegister from '../LoginRegister'


const  Vendor = () => {

    const [logggedIn, setLoggedin] = useState(false)

    // const imageShow = () => {
        
    //     const input = document.getElementById('product-image')
    //     const inputValue = input.files[0]
    //     console.log(inputValue)
    // }

     
    return ( 

        <>
            
            <Dashboard/>
            <LoginRegister/>
        </>

      
        
     );
}
 
export default Vendor;