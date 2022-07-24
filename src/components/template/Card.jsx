import React from "react";
import Link from 'next/link'
import { FilterLinksbyId, PutDataOnForm,ClearDataOnForm,ShowModal } from "../../utils/Functions"
import { useAuth } from "../../context/AuthContext"

export default function Card({ data } = Props) {

  const { DataList, setHTTPMethod } = useAuth()

  const btnEdit = id => {
    const data = FilterLinksbyId(id, DataList);
    const fieldsAvaiableOnModal = [ "id", "id_user", "title", "description", "link"]
    setHTTPMethod("PUT")
    ClearDataOnForm(fieldsAvaiableOnModal);
    PutDataOnForm(data, fieldsAvaiableOnModal);  
    ShowModal('modalForm')    
  }

  const btnDelete = id => {      
    setHTTPMethod("DELETE")
    ClearDataOnForm(["id_delete"]);
    PutDataOnForm([{id_delete:id}], ["id_delete"]);  
    ShowModal('modalDelete')
  }


  return (

    <div className="col">
      <div className="card shadow-sm">
        <h5 className="card-header">{data.title}</h5>
        <div className="card-body">
          <p className="card-text">{data.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">              
              {
                data.link!=""? (
                  <Link href={data.link}>
                    <a target="__blank" className="btn btn-sm btn-outline-success">Open</a>
                  </Link>
                ):""                
              }
            </div>
            <small className="text-muted">
              <button type="button" onClick={() => btnEdit(data.id)} className="btn btn-sm btn-primary">Edit</button>
              &nbsp;
              <button type="button" onClick={() => btnDelete(data.id)}  className="btn btn-sm btn-outline-danger">Delete</button>
            </small>
          </div>

        </div>
      </div>
    </div>
  )
} 