import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './contact-actions';
import { current } from 'immer';

const contacts = { items: [], filter: '' };

export const contactsReducer = createReducer(
  { contacts },
  {
    [addContact]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          items: [...currentState.contacts.items, payload],
        },
      };
    },
    [deleteContact]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          items: [
            ...currentState.contacts.items.filter(item => item.id !== payload),
          ],
        },
      };
    },
    [setFilter]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          filter: payload,
        },
      };
    },
  }
);
