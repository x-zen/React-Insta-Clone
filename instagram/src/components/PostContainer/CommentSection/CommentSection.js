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

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState ({
        comments : JSON.parse(localStorage.getItem(this.props.postId))
      });
    }

    else {
      this.setComm();
    }
  }

  componentWillUnmount() {
    this.setComm();
  }

  setComm = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addComment = () => {
    this.preventDefault();
    const newComm = {text: this.state.comment, username: 'dev-admin'};
    const comments = this.state.comments.slice();
    comments.push(newComm);
    this.setState({comments, comment: ''});
    setTimeout(() => {
      this.setComm();
    }, 500);
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentForm
          comment={this.state.comment}
          submitComment={this.addComment}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

export default CommentSection;
