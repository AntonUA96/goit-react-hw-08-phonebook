import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { contactsOperation } from '../../redux/contacts/index';

const INITIAL_STATE = {
  phone: '',
  name: '',
};

class ContacForm extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.props.fetchContacts()
  }

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;

  
  onAdd({ id: uuidv4(), name, phone });
  this.setState(INITIAL_STATE);
   
  };

 

  render() {
    const { phone, name } = this.state;
    

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter yuor name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter yuor phone"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add Contacts</button>
        </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onAdd: description => dispatch(contactsOperation.addContacts(description)),
  fetchContacts:()=>dispatch(contactsOperation.fetchContacts())
 
})



export default connect(null, mapDispatchToProps)(ContacForm);

  


