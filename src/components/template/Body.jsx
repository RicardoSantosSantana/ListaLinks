import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

export default function Body(Props) {

    return (
        <>
        <Header />            
            <Title />          
                <div className="container">                      
                        {Props.children}                      
                </div>
        <Footer />
        </>
    ) 
}