import Image from "next/image";

import { signOut, useSession } from "next-auth/react"

export default function Header() {
    const { data: session } = useSession();
    const imagem = session?.user?.image;
    const name = session?.user?.name;
    const email = session?.user?.email;
 
    
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li className="text-white"> {name}</li>
                                <li className="text-white"> {email}</li>
                                <li><a href="#" className="text-white" onClick={() => signOut()}>Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <Image alt="logo"   src={"/logo-save-link.png"} width={40} height={40} />
                        <strong>&nbsp;Remember Link</strong>
                    </a>
                    <button className="navbar-toggler p-0 m-0   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">                        
                        <Image src={imagem ? imagem : '/logo-save-link.png'}  height={45}  width={45}  alt={name}/>
                    </button>
                </div>
            </div>
        </header> 
    )
}
