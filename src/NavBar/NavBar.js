import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Tags" />
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
    width: '240px'
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(NavBar);
