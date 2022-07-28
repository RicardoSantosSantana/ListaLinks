import { Categories } from "../../utils/Categories"

export default function DropdownCategorias( { category } = Props){
    
    return (
        <select id="category" className="form-control">
            {
                Categories.list.map((el,idx)=><option key={idx+el} value={el}>{el}</option>)
            }
        </select>
    )    
    
}