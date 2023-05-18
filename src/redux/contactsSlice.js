import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 'v7NdUb7-2qZndfhGS2Fwj', name: 'Fig', number: '123123213' },
  { id: 'zgDoKRl-0Vwh6kGhnRC_5', name: 'wwww', number: '123123' },
  { id: 'OSKhjWX6fs16nL2u4sYnY', name: 'user', number: '123-123123' },
  { id: '6jTpmH807Y_8yT_eZvoIJ', name: 'parrot', number: '123123' },
  { id: 'QTbcr7Ro-nTOHaC4BbvkL', name: 'cat', number: '123-231-123' },
  { id: 'MxxHj7Rh1pYUSLg4tpX8A', name: 'dog', number: '123-132-123' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
