import Image from "next/image"

export default function Header1(){
    return(
        <header>
            <div className="header-container1">
                
                <a href="" className="image-item"> <Image src="/convystore1.png" alt="logo" width={150} height={50} ></Image></a>

            </div>
        </header>
    )
}