import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import stackoverflow from '../stackoverflow.scss';

class Header extends Component {
  render() {
    const {classes} = this.props;
    return (
      <AppBar className={classes.header}>
        <Toolbar>
          <span className={stackoverflow.logo}>Stack Overflow</span>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  header: {
    borderTop: '3px solid #F48024',
    zIndex: theme.zIndex.drawer + 1,
  }
});

export default withStyles(styles)(Header);
