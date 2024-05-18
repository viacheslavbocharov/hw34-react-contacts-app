import React from 'react'
import { useState } from 'react';
import './EditContactForm.css'



export default function EditContactForm({ setCurrentPage, contactToEdit, setContacts }) {

  const [errors, setErrors] = useState({});

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
    let indexContactToEdit = localContacts.findIndex(contact => contact.id === contactToEdit.id);
 

    const contact = {
      id: contactToEdit.id,
      name: name,
      surname: surname,
      phone: phone
    };

    if (Object.keys(validationErrors).length === 0) {
      localContacts[indexContactToEdit] = contact;
      localStorage.setItem('localContacts', JSON.stringify(localContacts));
      setContacts(localContacts)
      setCurrentPage('contacts');
    }
  }

  return (
    <>
      <div className='form-header'>
        <h3 >Edit contact form</h3>
        <input type="button" value="Cancel" onClick={() => setCurrentPage('contacts')} />
      </div>
      <form className='form' name="form">
        <input type="text" name="name" placeholder='Name' defaultValue={contactToEdit.name} />
        {errors.name && <div className="error">{errors.name}</div>}
        <input type="text" name="surname" placeholder='Surname' defaultValue={contactToEdit.surname} />
        {errors.surname && <div className="error">{errors.surname}</div>}
        <input type="text" name="phone" placeholder='Phone' defaultValue={contactToEdit.phone} />
        {errors.phone && <div className="error">{errors.phone}</div>}
        <input type="button" value="Save" onClick={saveContact} />
      </form>
    </>
  )
}