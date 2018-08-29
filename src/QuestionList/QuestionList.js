import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

import QuestionLink from './QuestionLink/QuestionLink';
import LargeNumber from '../Shared/LargeNumber/LargeNumber';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          "tags": [
            "java",
            "pdf-generation",
            "html-parsing",
            "itext"
          ],
          "owner": {
            "reputation": 12419,
            "user_id": 42372,
            "user_type": "registered",
            "accept_rate": 95,
            "profile_image": "https://www.gravatar.com/avatar/e9550bd5fab2b2a8ad0af487ff1fddb5?s=128&d=identicon&r=PG",
            "display_name": "Veera",
            "link": "https://stackoverflow.com/users/42372/veera"
          },
          "is_answered": true,
          "view_count": 13712,
          "accepted_answer_id": 4730901,
          "answer_count": 3,
          "score": 4,
          "last_activity_date": 1535464219,
          "creation_date": 1295263808,
          "last_edit_date": 1535464219,
          "question_id": 4712641,
          "link": "https://stackoverflow.com/questions/4712641/how-to-convert-an-html-content-to-pdf-without-losing-the-formatting-using-java",
          "title": "How to convert an HTML content to PDF without losing the formatting using Java?"
        },
        {
          "tags": [
            "mysql",
            "sql"
          ],
          "owner": {
            "reputation": 1,
            "user_id": 10285117,
            "user_type": "registered",
            "profile_image": "https://lh6.googleusercontent.com/-HpgR4QLTJvo/AAAAAAAAAAI/AAAAAAAAANo/9_ZfxYlA0pY/photo.jpg?sz=128",
            "display_name": "Piu Piu",
            "link": "https://stackoverflow.com/users/10285117/piu-piu"
          },
          "is_answered": false,
          "view_count": 1,
          "answer_count": 0,
          "score": 0,
          "last_activity_date": 1535464217,
          "creation_date": 1535464217,
          "question_id": 52059529,
          "link": "https://stackoverflow.com/questions/52059529/optimization-sql-query",
          "title": "Optimization sql query"
        }
      ],
      total: 16370403
    }
  }

  componentDidMount() {
    // axios.get('https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow&filter=!9Z(-x-Q)8').then(res => {
    //   const questions = res.data.items || [];
    //   const total = res.data.total || 0;
    //   this.setState({ questions, total });
    // })
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.questions}>
        <div>
          <span className={classes.questions__total}><LargeNumber number={this.state.total}></LargeNumber> Questions</span>
        </div>
        <ul className={classes.questions__list}>
          { this.state.questions.map(question => (<div key={question.question_id}><QuestionLink question={question}></QuestionLink><Divider /></div>)) }
        </ul>
      </div>
    )
  }
}

const styles = theme => ({
  questions: {
    margin: '50px 0'
  },
  questions__list: {
    listStyleType: 'none',
    padding: 0,
  },
  questions__total: {
    fontSize: '18px'
  }
});

export default withStyles(styles)(QuestionList);
