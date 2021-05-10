import contactsReducer from './Phonebook/contacts-reducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    phonebook: contactsReducer,

});

const store = configureStore({
    reducer: rootReducer,
   // devTools: process.env.NODE_ENV === 'development',
});

export default store;