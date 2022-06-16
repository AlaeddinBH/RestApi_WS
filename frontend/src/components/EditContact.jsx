import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TiEdit } from "react-icons/ti";
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editContact, getContact } from '../redux/action';

const EditContact = ({contact}) => {
  const [fullName, setFullName] = useState(contact.fullName);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id:contact._id,
      fullName,
      email,
      phone
    };
    dispatch(editContact(editedContact));
    dispatch(getContact());
    handleClose();
  };
  return (
    
      <>
      <div className='icons' >
        <TiEdit onClick={handleShow} className="edit-icon" />
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={fullName} onChange={(e)=> setFullName(e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" value={email} onChange={(e)=> setEmail(e.target.value) }/>
            </Form.Group>  
            <Form.Group className="mb-3" >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </Form.Group>  
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default EditContact
