import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class QuestionLink extends Component {
  render() {
    return (
      <li>
        <Grid container direction="row" spacing={16}>
          <Grid item xs={1} container direction="column" spacing={16}>
            <Grid item>{this.props.question.score}</Grid>
            <Grid item>{this.props.question.answer_count}</Grid>
          </Grid>
          <Grid item xs={8} container direction="column" spacing={16}>
            <Grid item>
              <Link to={`/questions/${this.props.question.question_id}`}>{this.props.question.title}</Link>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
      </li>
    )
  }
}

const styles = theme => ({

});

export default withStyles(styles)(QuestionLink);
