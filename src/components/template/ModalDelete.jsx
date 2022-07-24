import { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import Spinner from "./Spinner";
import { CloseModal } from "../../utils/Functions"

export default function ModalDelete() {

    const { getDataList, HTTP_SELECT_METHOD } = useAuth()
    const [toggleOnSave, setToggleOnSave] = useState(true)

    const deleteCallAPI = async (event) => {

        event.preventDefault()
        setToggleOnSave(false);

        const endpoint = '/api/links'
        const id = document.getElementById("id_delete").value
        const options = {
            method: HTTP_SELECT_METHOD.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }


        fetch(endpoint, options)
            .then(response => response.json())
            .then(result => {

                if (result.error) {
                    console.log(result.message)
                    alert(result.message)
                }
                else {
                    getDataList(result)
                    CloseModal('modalDelete')
                }

                setToggleOnSave(true)
            });


    }
    return (
        <div className="modal fade" id="modalDelete" tabIndex="-1" aria-labelledby="modalDeleteLabel" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure ?</p>
                        <input type="hidden" id="id_delete" name="id_delete"></input>
                    </div>
                    <div className="modal-footer">

                        {toggleOnSave ? (
                            <>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={(event)=>deleteCallAPI(event)} className="btn btn-danger">Delete</button>
                            </>
                        ) :
                            <Spinner />}


                    </div>

                </div>
            </div>
        </div>
    )
}