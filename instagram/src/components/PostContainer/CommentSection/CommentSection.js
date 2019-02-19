import React from 'react'
import Comment from './Comment.js'
import CommentForm from './CommentForm.js'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentForm />
      </div>
    );
  }
}

export default CommentSection;
