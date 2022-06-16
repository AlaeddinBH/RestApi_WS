import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from '../redux/action';
import ContactCard from './ContactCard';



const ContactList = () => {
  const {loading, Contact} = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:'5%'}}>

      {
      loading ? <h3>Loading...</h3>
      :
      <>
      {
        Contact.map(el=>
          <ContactCard key={el} contact={el} />
          )
      }
      </>
      }
        
    </div>
  )
};

export default ContactList