import { useAuth } from "../../context/AuthContext"
import Accordion from "./Accordion"


export default function GroupCard(){
  
    const { DataList } = useAuth()   
    return (
        <div className="accordion" id="ListAccordion">
        {   DataList.map( el => <Accordion data = { el } key={ el.id } /> ) }
        </div>
        )
   
}