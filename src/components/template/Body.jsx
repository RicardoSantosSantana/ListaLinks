import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

export default function Body(Props) {

    return (
        <>
            <Header />
            <main>
                <Title />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {Props.children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    ) 
}