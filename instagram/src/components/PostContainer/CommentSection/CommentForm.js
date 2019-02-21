import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        placeholder="Add comment... "
        onChange={props.changeComment} />
    </form>
  );
};

export default CommentInput;
