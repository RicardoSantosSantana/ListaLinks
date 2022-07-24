import { useAuth } from "../../context/AuthContext"
import Card from "./Card"

export default function GroupCard(){
  
    const { DataList } = useAuth()   
    return  DataList.map( el => <Card data = { el } key={ el.id } /> )
   
}