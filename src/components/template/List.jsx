import Accordion from 'react-bootstrap/Accordion';
import React from "react";
import { FilterLinksbyId, PutDataOnForm, ClearDataOnForm, ShowModal } from "../../utils/Functions"
import { useAuth } from "../context/AuthContext"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Categories } from "../../utils/Categories";


export default function List({ data } = Props) { 

  const { setHTTPMethod, DataList, setShowFormModal } = useAuth() 
  const btnEdit = async id => {

    const data = FilterLinksbyId(id, DataList)
    setHTTPMethod("PUT")

     await setShowFormModal()
    
     ClearDataOnForm();
     PutDataOnForm(data);
    
  }

  const btnDelete = id => {
    setHTTPMethod("DELETE")
    ClearDataOnForm(["id_delete"]);
    const data = FilterLinksbyId(id, DataList);
    PutDataOnForm([{ id_delete: id }], ["id_delete"]);

    document.getElementById("titleDelete").innerHTML = data[0].title
    ShowModal('modalDelete')
  }

  const isLink = data.link ? <Nav.Link variant="primary" target="__blank" href={data.link}>Open Link</Nav.Link> : ""

  return (

    <Accordion.Item eventKey={data.id}>
      <Accordion.Header> { Categories.badge(data.category) } &nbsp; {data.title}</Accordion.Header>
      <Accordion.Body>
      {Categories[data.category](data)}
        <Navbar >
          <Container className="mb-1" xs={12}>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '50px' }} navbarScroll>
                { isLink }
                <Nav.Link href="#" variant="btn-link" onClick={() => btnEdit(data.id)}>Edit</Nav.Link>
              </Nav>
              <Navbar.Text></Navbar.Text>
              <Button variant="btn-link"  onClick={() => btnDelete(data.id)}>Delete</Button>              
            </Navbar.Collapse>
          </Container>
        </Navbar>

      
      </Accordion.Body>
    </Accordion.Item>

  )

}