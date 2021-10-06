import React from 'react';
import logo from '../assets/logo.svg';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = () => ({
  root: {
    color: '#000000', 
    textAlign: 'center',
    display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justfyContent: 'center',
  },
  loading: {
    color: '#ea4335', 
    marginLeft: '50%',
  },
});

const LoadingPage = ({ 
  classes,
}) => (
  <div className={classes.root}>
    <img src={logo} className="App-logo" alt="logo" />
    <div className={classes.loading}>Loading...</div>
  </div>
);

export default withStyles(styles)(LoadingPage);