import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();


  if (!Array.isArray(contacts)) {
    console.error('contacts.items не є масивом!', contacts);
    return <p className={styles.error}>Помилка: некоректні дані контактів.</p>;
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className={styles.noContacts}>Контактів не знайдено</p>
      )}
    </ul>
  );
};

export default ContactList;
