import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';

class CommentList extends React.Component {
    constructor() {
      super();
      this.state = { comments: [] };
    }
    componentDidMount() {
      fetchSomeComments(comments =>
        this.setState({ comments: comments }));
    }
    render() {
      return (
        <ul>
          {this.state.comments.map(c => (
            <li>{c.body}—{c.author}</li>
          ))}
        </ul>
      );
    }
  }
  
  // This is just a placeholder for a real request
  const fetchSomeComments = cb =>
    cb([
      { author: "Jay", body: "You look nice today." },
      { author: "Amin", body: "I know!" }
    ]);
  
