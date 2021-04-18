import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContacForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import styles from '../App.module.css';
import { contactsSelectors } from '../redux/contacts/index';

class ContactsView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Добавить в список контактов</h2>
        <ContacForm />
        <h2>Найти в списке контактов:</h2>
        <Filter />

        <ContactList />
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps, null)(ContactsView);
