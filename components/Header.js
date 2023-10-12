import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import{faBars, faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

export default function Header(){
    return(
        <header>
            <div className="header-container">
            <a href="" className="ham-anchor"><FontAwesomeIcon icon={faBars} className="ham-icon"/> </a>
            <a href="" className="image-item"> <Image src="/convystore1.png" alt="logo" width={150} height={50} ></Image></a>
            

            <div className="main-menu">

                <a href=""> Men</a>
                <a href=""> Women</a>
                <a href=""> Kids</a>
                <a href=""> Beauty & Health</a>
                <a href=""> Accessories</a>
                
            </div>

            <div className="search-div">
                <a> <FontAwesomeIcon icon={faSearch} className="search-icon"/></a>
                <input type="search" name="search" 
                id="search" className="search-input" placeholder=""></input>
                
            </div>

            <div className="side-menu">
                
                <a href="" className="cart-icon">
                <FontAwesomeIcon icon={faCartShopping} className="search-icon"/><span className="cart-num">0</span></a>
                <a href="" className="user-icon"> <FontAwesomeIcon icon={faUser} className="search-icon"/></a>
            </div>
            
            </div>
      </header>
    )
}