import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', payload => ({
  payload: { id: nanoid(), ...payload },
}));

export const deleteContact = createAction('contacts/delete');
export const setFilter = createAction('contacts/filter');
// export default { addContact, deleteContact, setFilter };
