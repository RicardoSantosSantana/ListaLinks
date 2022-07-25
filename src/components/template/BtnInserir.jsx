import { ShowModal, ClearDataOnForm } from "../../utils/Functions"
import { useAuth } from "../../context/AuthContext"

export default function BtnInserir(){
    const { setHTTPMethod } = useAuth()
       
    const inserirNovoLink = () => {
      
        const fieldsAvaiableOnModal = [ "id", "id_user", "title", "description", "link"]
        ClearDataOnForm(fieldsAvaiableOnModal)
        ShowModal('modalForm')        
        setHTTPMethod("POST") 
      }
          
    return (
        <div className="pt-2 mb-2">
            <button type="button" className="btn btn-primary" onClick={()=>inserirNovoLink()} >
                adicionar novo 
            </button>
        </div>
    )
}