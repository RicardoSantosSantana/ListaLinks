import { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import Spinner from "./Spinner";
import { CloseModal } from "../../utils/Functions"

export default function Form() {

  const { getDataList, HTTP_SELECT_METHOD } = useAuth()
  const [toggleOnSave, setToggleOnSave] = useState(true)

  const handleSubmit = async (event) => {

    event.preventDefault()
    setToggleOnSave(false);

    const endpoint = '/api/links'
    const data = {
      title: event.target.title.value,
      link: event.target.link.value,
      description: event.target.description.value,
      id: event.target.id.value,
      id_user: 1,
    }
    const options = {
      method: HTTP_SELECT_METHOD.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
 
    const options3 = {
      method: HTTP_SELECT_METHOD.method,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    }
   
    fetch(endpoint, options)
      .then(response => response.json())
      .then(result => {        

        if (result.error){
          console.log(result.message)
          alert(result.message)
        }
        else {
          getDataList(result)
          CloseModal('modalForm')  
        } 
      
        setToggleOnSave(true)
      });


  }
  return (

    <form onSubmit={handleSubmit}>
      <input type="hidden" id="id" name="id"></input>
      <input type="hidden" id="id_user" name="id_user"></input>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Títle</label>
        <input type="text" className="form-control" id="title" name="title" rows="3" required></input>
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label">Link</label>
        <input type="text" className="form-control" id="link" name="link" placeholder="http://seulink.com.br"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
      </div>
      {
        toggleOnSave ? ( 
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-outline-success" type="submit">Save</button>
          </div> 
        ) :
          <Spinner />
      }

     

    </form>


  )
}