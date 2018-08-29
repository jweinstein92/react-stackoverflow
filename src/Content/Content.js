import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {
  render() {
    const {classes} = this.props;

    return (
      <main className={classes.content}>
        {this.props.children}
      </main>
    );
  }
}

const styles = theme => ({
  content: {
    position: 'absolute',
    top: theme.standards.toolbar.height,
    left: '0',
    height: `calc(100vh - ${theme.standards.toolbar.height}px)`,
    width: `100vw`,
    [theme.breakpoints.up('md')]: {
      left: theme.standards.navBar.width,
      width: `calc(100vw - ${theme.standards.navBar.width}px)`
    }
  }
});

export default withStyles(styles)(Content);
