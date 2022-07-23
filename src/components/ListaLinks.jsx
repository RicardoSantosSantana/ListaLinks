import React from "react";
import  { FilterLinksbyId, PutDataOnForm } from "../utils/Functions"

export default function ListaLinks({ listaLinks } = Props) {
    
    const showEdit = id => {        
        const  data = FilterLinksbyId(id,listaLinks);
        PutDataOnForm(data,"id","id_user","title","description","link");
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()
      }

    const dados = listaLinks.map(el => {
        return (
            <div className="card" key={el.id}>                
                <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{el.link}</h6>
                    <p className="card-text">{el.description}</p>
                    <div className="row">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button   onClick={()=>showEdit(el.id)} className="btn btn-outline-info" type="button">Editar</button>
                            <button className="btn btn-outline-danger" type="button">Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                {dados}
            </div>
        </div>
    )

}