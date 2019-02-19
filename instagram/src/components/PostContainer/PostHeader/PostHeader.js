import React from "react"

import './PostHeader.css'

const PostHeader = props => {
  return(
    <div class='post-header'>
      <div class='post-thumbn-w'>
        <img
          alt='post header'
          className='post-thumbn'
          src={props.thumbnailUrl}
        />
      </div>
      <div class='uname'>{props.username}</div>
    </div>
  );
};

export default PostHeader;
