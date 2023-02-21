import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form, Filter, ContactList } from './index';

import initialContacts from '../contacts.json';
import s from './app.module.scss';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already exist in your contact list`);
    } else {
      setContacts(state => [{ ...contact, id: nanoid() }, ...contacts]);
    }
  };

  const onHandleDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onHandleFilter = e => {
    setFilter(e.target.value);
  };

  const onHandleVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter onChange={onHandleFilter} />
      <ContactList
        contacts={onHandleVisibleContacts}
        onDeleteContact={onHandleDelete}
      />
    </div>
  );
}
