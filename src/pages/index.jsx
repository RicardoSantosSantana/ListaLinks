import Template from "../components/template/Template";
import { useSession } from "next-auth/react";
import NotLogged from "../components/template/notlogged/NotLogged";

 export default function Home(){   
  
  const session = useSession()
  if(session.status=="unauthenticated"){
    return <NotLogged/>
  }
  
  return <Template/>  
    
   
}

