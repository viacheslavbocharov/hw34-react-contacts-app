import React from 'react'
import './ContactList.css'
import Contact from '../Contact/Contact'


export default function ContactList({ contacts, setCurrentPage, deleteContactById, setContactToEdit }) {
    
    const contactList = contacts.map((person) => <Contact key={person.id} person={person} setCurrentPage={setCurrentPage} deleteContactById={deleteContactById} setContactToEdit={setContactToEdit}/>)

    return (
        <div className='contactList'>
            {contactList}
        </div>
    )
}
