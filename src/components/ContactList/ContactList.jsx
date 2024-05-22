import React from 'react'
import './ContactList.css'
import Contact from '../Contact/Contact'


export default function ContactList({ contacts, deleteContactById, setContactToEdit }) {
    
    const contactList = contacts.map((person) => <Contact key={person.id} person={person} deleteContactById={deleteContactById} setContactToEdit={setContactToEdit}/>)

    return (
        <div className='contactList'>
            {contactList}
        </div>
    )
}
