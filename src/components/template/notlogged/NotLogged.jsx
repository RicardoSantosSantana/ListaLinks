import HeaderNotLogged from "./HeaderNotLogged";
import { signIn } from "next-auth/react"

export default function NotLogged() {
                                 
    return (
        <>
            <HeaderNotLogged />
            <section className=" container">
                <div className="row"> 
                    <div className="card mb-3" style={{MaxWidth: "540px" }}>
                        <div className="row g-0">                           
                            <div className="col-md-12">
                                <div className="card-body">                                  
                                    <p className="card-text"> <button className="btn btn-outline-success" onClick={() => signIn("github")}>Logar com GitHub</button> </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </section>
        </>
    )

}