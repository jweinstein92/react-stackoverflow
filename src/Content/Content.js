import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {
  render() {
    console.log(this.props);
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
    padding: '32px',

  }
});

export default withStyles(styles)(Content);
