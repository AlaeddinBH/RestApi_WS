import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/action';
import { Form , Row , Col , Button} from 'react-bootstrap';

const AddContact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      fullName,
      email,
      phone
    }
    dispatch(addContact(newContact));
    setFullName("");
    setEmail("");
    setPhone("");
  }
  return (
    <div >
      <Form.Group className="mb-4 Form-add" >
      <Form onSubmit={handelSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="Full name" 
            value={fullName} 
            onChange={(e)=> setFullName(e.target.value) }/>
          </Col>
          <Col>
            <Form.Control placeholder="E-mail" 
            value={email}
            onChange={(e)=> setEmail(e.target.value) }/>
          </Col>
          <Col>
            <Form.Control placeholder="Phone number" 
            value={phone}
            onChange={(e)=> setPhone(e.target.value) }/>
          </Col>
          <Col>
          <Button variant="primary" type="submit">ADD</Button>
          </Col>
        </Row>
        
      </Form>
      </Form.Group>
    </div>
  )
}

export default AddContact
