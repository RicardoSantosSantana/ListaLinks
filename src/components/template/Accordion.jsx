import React from "react";
import Link from 'next/link'
import { FilterLinksbyId, PutDataOnForm, ClearDataOnForm, ShowModal } from "../../utils/Functions"
import { useAuth } from "../context/AuthContext"

export default function Accordion({ data } = Props) {

    const { DataList, setHTTPMethod } = useAuth()

    const btnEdit = id => {
        const data = FilterLinksbyId(id, DataList);
        const fieldsAvaiableOnModal = ["id", "id_user", "title", "description", "link"]
        setHTTPMethod("PUT")
        ClearDataOnForm(fieldsAvaiableOnModal);
        PutDataOnForm(data, fieldsAvaiableOnModal);
        ShowModal('modalForm')
    }

    const btnDelete = id => {
        setHTTPMethod("DELETE")
        ClearDataOnForm(["id_delete"]);
        const data = FilterLinksbyId(id, DataList);
        PutDataOnForm([{ id_delete: id }], ["id_delete"]);

        document.getElementById("titleDelete").innerHTML=data[0].title
        ShowModal('modalDelete')
    }

    return (


        <div className="accordion-item">
            <h2 className="accordion-header " id={"heading_" + data.id}>

                <button className="accordion-button bg-secondary text-white  bg-gradient collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + data.id} aria-expanded="true" aria-controls={"collapse_" + data.id}>
                    {data.title}
                </button>
            </h2>
            <div id={"collapse_" + data.id} className="accordion-collapse collapse" aria-labelledby={"heading_" + data.id} data-bs-parent="#ListAccordion">
                <div className="m-2">
                    <div className="shadow-sm p-0 mb-0 bg-body rounded">
                        {
                            data.link != "" ? (<>
                                <Link href={data.link}>
                                    <a target="__blank" className="btn  btn-link text-decoration-none">Open</a>
                                </Link>
                            </>
                            ) : ""
                        }
                        <span className="m-2">
                            <button type="button" onClick={() => btnEdit(data.id)} className="btn  btn-link text-decoration-none">Edit</button>
                        </span>
                        <span>
                            <button type="button" onClick={() => btnDelete(data.id)} className="btn  btn-link link-danger text-decoration-none">Delete</button>
                        </span>
                    </div>
                </div>
                <pre className="p-2 m-2">{data.description}</pre>
            </div>
        </div> 
    )
}