import React, { Component } from 'react';
import './App.css';

//import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />

        <div class='post-box'>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
