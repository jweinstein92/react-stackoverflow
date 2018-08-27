import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import app from './App.scss';
import stackoverflow from '../stackoverflow.scss';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafb'
    },
  },
  status: {
    danger: '#F48024',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header></Header>
        <NavBar></NavBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
