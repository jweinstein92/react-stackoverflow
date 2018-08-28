import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.home}>
        <header>
          <span className={classes.home__title}>All Questions</span>
          <Button variant="contained" color="primary" className={classes.button}>
            Ask Question
          </Button>
        </header>
      </div>
    );
  }
}

const styles = theme => ({
  home: {
    padding: '32px'
  },
  home__title: {
    fontSize: '30px'
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  }
});
export default withStyles(styles)(HomePage);
