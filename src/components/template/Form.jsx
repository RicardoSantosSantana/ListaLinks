import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import Spinner from "./Spinner";
import DropdownCategorias from  "../template/DropdownCategorias"

export default function Form() {

  const { getAPILinks, HTTP_SELECT_METHOD, setHideFormModal,session } = useAuth()

  const [toggleOnSave, setToggleOnSave] = useState(true)
  
  const handleSubmit = async (event) => {

    event.preventDefault()
    setToggleOnSave(false);

    const endpoint = '/api/links'
    const data = {
      email: session.user.email,
      title: event.target.title.value,
      link: event.target.link.value,
      description: event.target.description.value,
      category:event.target.category.value,
      id: event.target.id.value,
     
    }
    const options = {
      method: HTTP_SELECT_METHOD.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
 
    fetch(endpoint, options)
      .then(response => response.json())
      .then(result => {
        if (result.error){
          console.log(result.message)
          alert(result.message)
        }
        else {
          console.log(result)
          getAPILinks(result)
          setHideFormModal(false)
        } 
      
        setToggleOnSave(true)
    });


  }
  
  return (

    <form onSubmit={handleSubmit}>
      <input type="hidden" id="id" name="id"></input>
      <input type="hidden" id="email" name="email"></input>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"><strong>Títle</strong></label>
        <input type="text" className="form-control" id="title" name="title" rows="3" required></input>
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label"><strong>Link</strong></label>
        <input type="text" className="form-control" id="link" name="link" placeholder="http://seulink.com.br"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"><strong>Category</strong></label>
        <DropdownCategorias/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label"><strong>Description</strong></label>
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