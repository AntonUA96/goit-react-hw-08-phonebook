import axios from 'axios';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError
} from './contacts-actions';


const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  }
  catch(error){
    dispatch(fetchContactError(error.message));
  }
}



const addContacts = description => dispatch => {

  dispatch(addContactRequest());

  axios
    .post('/contacts', description)
    .then(({ data }) => dispatch(addContactSuccess(data)))

    .catch(error => dispatch(addContactError(error.message)));
};

const removeContacts = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error.message)));
  
}

export default {
  fetchContacts,
  addContacts,
  removeContacts,
};
