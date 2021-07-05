import React from 'react'
import CommentSection from './CommentSection/CommentSection.js'
import PostHeader from './PostHeader/PostHeader.js'

import './PostContainer.css'

const Post = props => {
  return (
    <div class='post'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />

      <div class='post-img'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.post.imageUrl}
        />
      </div>

      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
