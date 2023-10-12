'use client'
import { useState } from "react"

import Link from "next/link"


const LoginRegister = () => {

    const [loggedIn, setLoggedIn] = useState(false)//context
    return (
        <>
            {!loggedIn && 
            <>
                <h2>Welcome</h2>
                <p>Please <Link href={'/vendor/login'}>Login</Link> or <Link href={'/vendor/registration'}>Register</Link></p>
            </>}
        
        </>
    );
}
 
export default LoginRegister;
