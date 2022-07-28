import { useAuth } from "../context/AuthContext"
import Accordion from 'react-bootstrap/Accordion';
import List from "./List"


export default function GroupCard(){
  
    const { DataList } = useAuth()   
    return (
        <Accordion defaultActiveKey="0" >
        {   DataList.map( el => <List data = { el } key={ el.id } /> ) }
        </Accordion>
        )
   
}