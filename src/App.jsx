import React, { useState, useEffect } from 'react'
import './App.css';
import Button from './components/Button/Button';
import ContactList from './components/ContactList/ContactList';
import AddContactForm from './components/AddContactForm/AddContactForm';
import EditContactForm from './components/EditContactForm/EditContactForm';


export default function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState('contacts')
  const [contactToEdit, setContactToEdit] = useState()

  const goToContactList = () => {
    setCurrentPage('contacts')
  }

  const goToAddContactForm = () => {
    setCurrentPage('addContact')
  }

  function deleteContactById(person) {
    let localContacts = JSON.parse(localStorage.getItem('localContacts'));
    localContacts = localContacts.filter(contact => contact.id !== person.id);
    localStorage.setItem('localContacts', JSON.stringify(localContacts));
    setContacts(localContacts);
  }


  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('localContacts'));

    if (localContacts && localContacts.length) {
      setContacts(localContacts);
    } else {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          setContacts(data);
          localStorage.setItem('localContacts', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching contacts:', error));
    }
  }, []);



  return (
    <div className="App">
      <header className="header">
        <Button name="All contacts" onClick={goToContactList} />
        <Button name="Add contact" onClick={goToAddContactForm} />
      </header>

      {currentPage === 'contacts' && <ContactList contacts={contacts} setCurrentPage={setCurrentPage} deleteContactById={deleteContactById} setContactToEdit={setContactToEdit} />}
      {currentPage === 'addContact' && <AddContactForm setCurrentPage={setCurrentPage} setContacts={setContacts} />}
      {currentPage === 'editContact' && <EditContactForm setCurrentPage={setCurrentPage} contactToEdit={contactToEdit} setContacts={setContacts} />}

    </div>
  );
}

