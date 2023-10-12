import Image from "next/image"
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer>
        <div className="footer-div1">
            
                <div className="col1">
                    <h2><a href="">SHOP</a></h2>
                    <p><a href="">categories</a></p>
                    <p><a href="">Brands</a></p>
                    <p><a href="">Health and Sports</a></p>
                </div>

                <div className="col2">
                    <h2><a href="">CORPORATE INFO</a></h2>
                    <p><a href="">Business</a></p>
                    <p><a href="">Investor Relations</a></p>
                    <p><a href="">Become a vendor</a></p>
                    <p><a href="">Career with us</a></p>
                </div>

                <div className="col3">
                    <h2><a href="">HELP</a></h2>
                    <p><a href="">Customer Care</a></p>
                    <p><a href="">My Account</a></p>
                    <p><a href="">Legal & Privacy</a></p>
                    <p><a href="">Gift Cards</a></p>
                    <p><a href="">Report a scam</a></p>

                </div>

            </div>
            <div className="footer-div2">
                
                <p> <a href="" className="fb"><span><FontAwesomeIcon icon={faFacebook} /></span></a> </p>
                <p> <a href="" className="tweet"><span><FontAwesomeIcon icon={faTwitter}  /></span></a> </p>
                <p> <a href="" className="insta"><span><FontAwesomeIcon icon={faInstagram}  /></span></a></p>
                
            </div>
            
            <a href="" className="footer-logo"><Image src="/convystore.png" alt="" width={150} height={50}/></a>
        </footer>
)
}