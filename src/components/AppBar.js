import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigatoin';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import styles from '../App.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
