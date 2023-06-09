import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.splice(index, 1);
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
    changeFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

//  --- Action creators are generated for each case reducer function ---
export const {
  changeFilter,
  addContact,
  deleteContact,
  increment,
  dincrement,
} = contactsSlice.actions;
