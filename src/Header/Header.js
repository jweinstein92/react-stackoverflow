import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import stackoverflow from '../stackoverflow.scss';

class Header extends Component {
  render() {
    const {classes} = this.props;
    return (
      <AppBar className={classes.header} color="secondary">
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerToggle}
              className={classes.navIconHide}
            >
            <MenuIcon />
          </IconButton>
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
    height: theme.standards.toolbar.height
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  }
});

export default withStyles(styles)(Header);
