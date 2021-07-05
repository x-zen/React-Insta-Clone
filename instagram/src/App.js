import React, { Component } from 'react';
import './App.css';

import { dummyData } from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  componentDidMount() {
    this.setState({comment:[]});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
