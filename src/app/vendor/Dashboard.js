'use client'

import { useState } from "react";


const Dashboard = () => {

    
    const [vendor, setVendor] = useState(sessionStorage.getItem("vendor"))//context
    return(
        <>
        { vendor  &&   <section>
                    <div className='section-container'>
                        <div className='side-div'>
                            <p> New Products</p>
                            <p> Orders</p>
                            <p> Customers</p>
                            <p> Products</p>
                            <p> Sales</p>
                            <p> Finances</p>
                            <p> Vendor Status</p>
                            <p> Coupons</p>
                            
                        </div>
                        <div className='main-div'>
                            <h1>New Products</h1>
                            
                            <div></div>
                        </div>
                    </div>
            
            </section>}
        </>
    )
}

export default Dashboard 