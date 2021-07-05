import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data'
import SearchBar from './SearchBar/SearchBar.js'
import PostContainer from './PostContainer/PostContainer.js'

class PostsPage extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }

}

export default PostsPage;
