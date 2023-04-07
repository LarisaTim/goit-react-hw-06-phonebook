import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  actions from '../../redux/contact/contact-actions';
import {
  filterContacts
} from '../../redux/contact/contact-selector';
import ContactItem from "./ContactItem/ContactItem";
import s from "./ListContact.module.css";


const ListContacts = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
 
  return (
      <ul>
      {contacts.map(({ id, name, number }) => (
            <ContactItem
            key={id}
            className={s.item}
          name={name}
           number={number}
           onDeleteContact={() => onDeleteContact(id)}
            />
        ))}
      </ul>
  
  );
};




 export default ListContacts;
