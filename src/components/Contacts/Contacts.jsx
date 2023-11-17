import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contact, deleteContact }) => {
  return (
    <div className={css.contacts}>
      <li className={css.contactsItem}>{contact.name}: {contact.number}</li>
      <button className={css.contactsBtn} onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contacts;
