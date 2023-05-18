import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('filter/changeFilter');
