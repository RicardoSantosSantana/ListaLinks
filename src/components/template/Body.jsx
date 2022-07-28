import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import FormModal from "./FormModal"

export default function Body(Props) {

    return (
        <>
        <Header />            
            <Title />  
            <FormModal />        
                <div className="container">                      
                        {Props.children}                      
                </div>
        <Footer />
        </>
    ) 
}