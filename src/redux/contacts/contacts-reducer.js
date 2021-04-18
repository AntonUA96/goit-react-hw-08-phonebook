import { combineReducers } from "redux";
import {
    addContactError,
    addContactSuccess,
    addContactRequest,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    filterChange,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
  } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';


const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload })=>payload,
    [addContactSuccess]: (state, { payload }) => {
        if (state && state.find(contact => contact.name === payload.name)) {
            alert('Пользователь с таким именем уже существует');
            return state;
        }
        if (!payload.name || !payload.phone) {
            alert('Данные не введены!');
            return state;
        }
       return [...state, payload]
    },
    [removeContactSuccess]:(state, {payload})=>  state.filter(contact => contact.id !== payload),
})

const filter = createReducer('', {
    [filterChange]:(_, {payload})=>payload,
})

const loading = createReducer(false, {
    [fetchContactRequest]:()=> true,
    [fetchContactSuccess]:()=> false,
    [fetchContactError]: ()=> false,
    [addContactRequest]:()=> true,
    [addContactSuccess]:()=> false,
    [addContactError]: () => false,
    [removeContactRequest]:()=> true,
    [removeContactSuccess]:()=> false,
    [removeContactError]: () => false,
    
    })


export default combineReducers({ items, filter, loading })
