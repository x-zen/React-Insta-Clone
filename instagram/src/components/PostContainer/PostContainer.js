import React from 'react'
import Post from './Post.js'
import './PostContainer.css'

const PostContainer = props => {
  return (
    <div class='post-cont'>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostContainer;
