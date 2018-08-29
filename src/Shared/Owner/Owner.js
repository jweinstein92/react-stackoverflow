import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Owner extends Component {
  render() {
    const {classes, owner} = this.props;
    return (
      <div className={classes.owner}>
        <img src={owner.profile_image} alt="" width="32" height="32" />
        <div className={classes.owner__details}>
          <div><a href="#">{owner.display_name}</a></div>
          <span className={classes.owner__reputation}>{owner.reputation}</span>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  owner: {
    textAlign: 'center',
    margin: '5px 0'
  },
  owner__details: {
    display: 'inline-block',
    margin: '0 5px',
    fontSize: '12px'
  },
  owner__reputation: {
    fontWeight: 'bold',
    fontSize: '12px',
    color: theme.palette.lightGrayText.main
  },
});

export default withStyles(styles)(Owner);
