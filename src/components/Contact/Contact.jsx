import React from 'react'
import { useState } from 'react';
import './Contact.css'
import Button from '../Button/Button'
import Modal from '../Modal/Modal';

export default function Contact({ person, setCurrentPage, deleteContactById, setContactToEdit }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='list'>
      <div className="item">{person.name}</div>
      <div className="item">{person.surname}</div>
      <div className="item">{person.phone}</div>
      <div className="item btn-list">
        <Button name="Edit" onClick={() => {setCurrentPage('editContact'); setContactToEdit(person);}}/>
        <Button name="Delete" onClick={() => setShowModal(true)}/>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={() => deleteContactById(person)} />   
    </div>
  )
}
