import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.content}>
        {this.props.children}
      </div>
    );
  }
}

const styles = theme => ({
  content: {
    position: 'absolute',
    top: theme.standards.toolbar.height,
    left: theme.standards.navBar.width,
    height: `calc(100vh - ${theme.standards.toolbar.height}px)`,
    width: `calc(100vw - ${theme.standards.navBar.width}px)`
  }
});

export default withStyles(styles)(Content);
