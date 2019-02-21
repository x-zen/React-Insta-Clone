import React from 'react';

const CommentForm = props => {
  return (
    <form onSubmit={props.setComment}>
      <input
        type="text"
        placeholder="Add comment... "
        onChange={props.addNewComment} /> //adds new comment on submit
    </form>
  );
};

export default CommentForm;
