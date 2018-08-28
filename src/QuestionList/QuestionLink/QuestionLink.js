import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

class QuestionLink extends Component {
  render() {
    const {classes, question} = this.props;
    return (
      <li className={classes.question}>
        <Grid container direction="row" spacing={0} classes={{container: classes.container}}>
          <Grid item xs={1} container direction="column" spacing={16} className={classes.stats}>
            <Grid item><span className={classes.question__count}>{question.score}</span> <span className={classes.question__subtext}>votes</span></Grid>
            <Grid item><span className={classes.question__count}>{question.answer_count}</span> <span className={classes.question__subtext}>answers</span></Grid>
          </Grid>
          <Grid item xs={8} container direction="column" spacing={16} justify="space-between">
            <Grid item>
              <Link to={`/questions/${question.question_id}`}>{question.title}</Link>
            </Grid>
            <Grid item>
              <ul className={classes.tags}>
                { question.tags.map(tag => <Chip label={tag} className={classes.tag} key={tag} color="primary" />) }
              </ul>
            </Grid>
          </Grid>
          <Grid item xs={2} container direction="column" spacing={16} className={classes.owner} justify="flex-end">
            <Grid item>
              <img src={question.owner.profile_image} alt="" width="32" height="32" />
              <div className={classes.owner__details}>
                <div><a href="#">{question.owner.display_name}</a></div>
                <span className={classes.owner__reputation}>{question.owner.reputation}</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </li>
    )
  }
}

const styles = theme => ({
  container: {
    padding: '8px',
    margin: '8px'
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
  question: {},
  question__count: {
    display: 'block',
    textAlign: 'center',
    fontSize: '20px',
    color: theme.palette.lightGrayText.main,
    fontWeight: 'bold'
  },
  question__subtext: {
    display: 'block',
    textAlign: 'center',
    fontSize: '11px',
    color: theme.palette.lightGrayText.main
  },
  stats: {
    minWidth: '125px'
  },
  tags: {
    padding: '0'
  },
  tag: {
    borderRadius: "4px",
    marginRight: "5px"
  }
});

export default withStyles(styles)(QuestionLink);
