import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { delContact, getContact } from '../redux/action';
import EditContact from './EditContact';



const ContactCard = ({contact}) => {
  const dispatch = useDispatch()
  return (
    <div className='App-row'>
      <div>{contact.fullName}</div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      
      <div className='icons'>
            <RiCloseCircleLine
            onClick={()=>{dispatch(delContact(contact._id)); dispatch(getContact())}}
            className='delete-icon' />
      </div>
      <EditContact contact={contact} />
   
    </div>
  );
}

export default ContactCard;