import React from 'react'
import { useState } from 'react';
import './Contact.css'
import Button from '../Button/Button'
import Modal from '../Modal/Modal';

export default function Contact({ person, setCurrentPage, deleteContactById, setContactToEdit }) {
  const [showModal, setShowModal] = useState(false);

const modalClose = () => {
  setShowModal(false)
}

const modalOpen = () => {
  setShowModal(true)
}

const deleteContact = () => {
  deleteContactById(person)
}

const editeContact = () => {
  setCurrentPage('editContact')
  setContactToEdit(person)
}



  return (
    <div className='list'>
      <div className="item">{person.name}</div>
      <div className="item">{person.surname}</div>
      <div className="item">{person.phone}</div>
      <div className="item btn-list">
        <Button name="Edit" onClick={editeContact}/>
        <Button name="Delete" onClick={modalOpen}/>

      </div>
      <Modal show={showModal} onClose={modalClose} onConfirm={deleteContact} />   

    </div>
  )
}
