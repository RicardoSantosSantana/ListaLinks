import Spinner from "./Spinner";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from "../context/AuthContext";

export default function ModalDelete() {

    const { 
        setShowModalDelete, 
        setCloseModalDelete,
        statusModalDelete } = useAuth()


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

        <Modal show={statusModalDelete} onHide={setCloseModalDelete}>
            <Modal.Header closeButton>
                <Modal.Title><span id="titleDelete"></span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {toggleOnSave ? (
                    <>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={(event) => deleteCallAPI(event)} className="btn btn-danger">Delete</button>
                    </>
                ) :
                    <Spinner />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={setCloseModalDelete}>
                    Close
                </Button>
                <Button variant="primary" onClick={setCloseModalDelete}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>


    )
}