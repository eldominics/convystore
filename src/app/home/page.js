import Image from "next/image";
import '../globals.css'


//homess
export default function Home(){
  return(
    <>
    
      <section>
      <div className="section1-div">
         <h2 className="first-h2"> Explore the world of quality clothings</h2>
         <p className="first-p">Our stores have the finest clothings and accessories
            that you can't find anywhere else.
         </p>
         <button className="section1-button"> Visit our stores</button>
      </div>
         
    </section>


    <section>
      <div className="section2-div">

         <div className=" box">
            <img src="/images/ladyred.jpeg" alt="" className="box-image" />
            <p className="boxes-para"> Lady Gown <span></span> 2000$</p>   
         </div>

         <div className=" box">
            <img src="/images/ladyshoe1.jpeg" alt="" className="box-image" />
            <p className="boxes-para"> lady shoe<span></span> 24$</p>
         </div>

         <div className=" box">
            <img src="/images/manboot1.jpeg" alt="" className="box-image" />
            <p className="boxes-para"> Man Boots <span></span> 70$</p>
         </div>

         <div className=" box">
            <img src="/images/nikeshoe2.jpeg" alt="" className="box-image"/>
            <p className="boxes-para"> Nike shoe <span></span> 3000$</p>
         </div>

         <div className=" box">
            <img src="/images/manshoe1.jpeg" alt="" className="box-image" />
            <p className="boxes-para"> Cool NIke<span></span> 1000$</p>
         </div>

         <div className=" box">
            <img src="/images/nikeshoe1.jpeg" alt="" className="box-image" /> 
            <p className="boxes-para"> Nike Lux<span></span> 3000$</p>   
         </div>

         
         
         
      </div>
    </section>


      
    </>
  )
  
}