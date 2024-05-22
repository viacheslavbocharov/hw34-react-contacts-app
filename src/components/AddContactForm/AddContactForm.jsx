import React from 'react';
import { useState } from 'react';
import './AddContactForm.css';
import { useNavigate } from "react-router-dom";


export default function AddContactForm({ setContacts }) {

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validateForm(name, surname, phone) {
    const newErrors = {};

    if (!/^[A-Z][a-zA-Z]{0,14}$/.test(name)) {
      newErrors.name = "Only letter. Up to 15 characters.";
    }

    if (!/^[A-Z][a-zA-Z]{0,14}$/.test(surname)) {
      newErrors.surname = "Only letter. Up to 15 characters.";
    }

    if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Only digits.";
    }

    return newErrors;
  }


  function saveContact() {

    const name = document.forms["form"]["name"].value;
    const surname = document.forms["form"]["surname"].value;
    const phone = document.forms["form"]["phone"].value;

    const validationErrors = validateForm(name, surname, phone);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    let localContacts = JSON.parse(localStorage.getItem('localContacts')) || [];

    function generateID(contacts) {
      let newId = 1;
      if (contacts.length !== 0) {
        contacts.forEach((contact) => {
          if (contact.id >= newId) {
            newId = contact.id + 1;
          }
        });
      }
      return newId;
    }

    const newId = generateID(localContacts);

    const contact = {
      id: newId,
      name: name,
      surname: surname,
      phone: phone
    };

    if (Object.keys(validationErrors).length === 0) {
      localContacts.push(contact);
      localStorage.setItem('localContacts', JSON.stringify(localContacts));
      setContacts(localContacts);
      navigate('/')
    }

 
  }

  return (
    <>
      <div className='form-header'>
        <h3 >Add contact form</h3>
        <input type="button" value="Cancel" onClick={() => navigate('/')} />
      </div>
      <form className='form' name="form">
        <input type="text" name="name" placeholder='Name' />
        {errors.name && <div className="error">{errors.name}</div>}
        <input type="text" name="surname" placeholder='Surname' />
        {errors.surname && <div className="error">{errors.surname}</div>}
        <input type="text" name="phone" placeholder='Phone' />
        {errors.phone && <div className="error">{errors.phone}</div>}
        <input type="button" value="Save" onClick={saveContact} />
      </form>
    </>
  )
}
