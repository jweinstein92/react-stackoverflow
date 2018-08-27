import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

class NavBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        className={classes.nav}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <Link to="/"><ListItemText primary="Home" /></Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/tags/"><ListItemText primary="Tags" /></Link>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Users" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Jobs" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    );
  }
}

const styles = theme => ({
  drawerPaper: {
    width: theme.standards.navBar.width
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(NavBar);
