import Footer from "../../../components/Footer";
import Header1 from "../../../components/Header1";
import '../globals.css'



export default function RootLayout({children}){

    return(
        <>
            <html>
                <body>
                    <Header1 />
                        {children}
                    <Footer />
                </body>
            </html>
        </>
        
    )

}