import React from 'react'
import Comment from './Comment.js'
import CommentForm from './CommentForm.js'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: []
    };
  }

  addNewComment = (event, i) => {
    this.preventDefault();
    const list = this.state.comment;
    const newComment = this.event.target;
    list.appendChild(newComment);
    this.setState({
      comment: [...this.state.comment, this.state.comments]
    });
  };

  setComment = () => {
    this.setItem(
      this.props.postId,
      JSON.stringify(this.state.comment)
    );
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentForm
          comment={this.state.comment}
          submitComment={this.addNewComment}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

export default CommentSection;
