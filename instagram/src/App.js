import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data'
import PostsPage from './components/PostsPage.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <PostsPage />
    );
  }

}

export default App;
