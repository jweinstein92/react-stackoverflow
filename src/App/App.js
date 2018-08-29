import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import app from './App.scss';
import stackoverflow from '../stackoverflow.scss';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import HomePage from '../HomePage/HomePage';
import TagPage from '../TagPage/TagPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0095ff'
    },
    secondary: {
      main: '#fafafb'
    },
    lightGrayText: {
      main: '#6a737c'
    }
  },
  status: {
    danger: '#F48024',
  },
  standards: {
    toolbar: {
      height: 67
    },
    navBar: {
      width: 240
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle() {
      this.setState(state => ({mobileOpen: !state.mobileOpen}));
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header handleDrawerToggle={this.handleDrawerToggle}></Header>
            <NavBar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen}></NavBar>
            <Content>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/tags/" component={TagPage}></Route>
              <Route path="/questions/:questionId" component={TagPage}></Route>
            </Content>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
