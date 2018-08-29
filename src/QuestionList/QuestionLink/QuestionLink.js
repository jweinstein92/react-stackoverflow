import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import Owner from '../../Shared/Owner/Owner';

class QuestionLink extends Component {
  readableCreationDate(epoch) {
    let dateFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: '2-digit'
    };
    let d = new Date(0);
    d.setUTCSeconds(epoch);

    return (d.toLocaleDateString("en-US", dateFormatOptions) + ' at ' + d.getHours() + ':' + d.getMinutes());
  }
  render() {
    const {classes, question} = this.props;
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada odio ut turpis imperdiet viverra. Praesent auctor eu sem in tincidunt. Nullam euismod at lectus vel fringilla. Nulla sed neque nec urna tincidunt sagittis non sed velit.';
    const askedAt = this.readableCreationDate(question.creation_date);
    return (
      <li className={classes.question}>
        <Grid container direction="row" spacing={0} classes={{container: classes.container}}>
          <Grid item xs={1} container direction="column" spacing={16} className={classes.stats}>
            <Grid item><span className={classes.question__count}>{question.score}</span> <span className={classes.question__subtext}>votes</span></Grid>
            <Grid item><span className={classes.question__count}>{question.answer_count}</span> <span className={classes.question__subtext}>answers</span></Grid>
            <Grid item><span className={classes.question__count}>{question.view_count}</span> <span className={classes.question__subtext}>views</span></Grid>
          </Grid>
          <Grid item xs={8} container direction="column" spacing={16} justify="space-between">
            <Grid item>
              <Link to={`/questions/${question.question_id}`}>{question.title}</Link>
            </Grid>
            <Grid item>
              <p className={classes.body}>{lorem}</p>
            </Grid>
            <Grid item>
              <ul className={classes.tags}>
                { question.tags.map(tag => <Chip label={tag} className={classes.tag} key={tag} color="primary" />) }
              </ul>
            </Grid>
          </Grid>
          <Grid item xs={2} container direction="column" spacing={16} className={classes.owner} justify="flex-end">
            <Grid item style={{textAlign: "center"}}>
              <div className={classes.question__asked}>{askedAt}</div>
              <Owner owner={question.owner}></Owner>
            </Grid>
          </Grid>
        </Grid>
      </li>
    )
  }
}

const styles = theme => ({
  body: {
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: '0'
  },
  container: {
    padding: '8px',
    margin: '8px'
  },
  question: {},
  question__asked: {
    fontSize: '12px',
    color: theme.palette.lightGrayText.main
  },
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
    minWidth: '100px'
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
