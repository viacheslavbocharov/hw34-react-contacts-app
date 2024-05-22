import React, { useState, useEffect } from 'react'
import './App.css';
import ContactList from './components/ContactList/ContactList';
import AddContactForm from './components/AddContactForm/AddContactForm';
import EditContactForm from './components/EditContactForm/EditContactForm';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Menu from './components/Menu/Menu';


export default function App() {

  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState()


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

  const deleteContactById = (person) => {
    let localContacts = JSON.parse(localStorage.getItem('localContacts'));
    localContacts = localContacts.filter(contact => contact.id !== person.id);
    localStorage.setItem('localContacts', JSON.stringify(localContacts));
    setContacts(localContacts);
  }

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} deleteContactById={deleteContactById} setContactToEdit={setContactToEdit} />} />
        <Route path="/add-contact" element={<AddContactForm setContacts={setContacts} />} />
        <Route path="/edit-contact" element={<EditContactForm contactToEdit={contactToEdit} setContacts={setContacts} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

