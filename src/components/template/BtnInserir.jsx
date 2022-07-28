import { ShowModal, ClearDataOnForm } from "../../utils/Functions"
import { useAuth } from "../context/AuthContext"

export default function BtnInserir(){    
    const { setHTTPMethod, setShowFormModal } = useAuth()

    const inserirNovoLink = async () => {                
        ClearDataOnForm()
        await setShowFormModal()

        setHTTPMethod("POST")    
      }
          
    return (
        <div className="pt-1 mb-2">
            <button type="button" className="btn btn-link" onClick={()=>inserirNovoLink()} >
                adicionar novo 
            </button>
        </div>
    )
}