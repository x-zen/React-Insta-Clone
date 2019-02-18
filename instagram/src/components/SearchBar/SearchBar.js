import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <header class='nav'>
      <div class='logos'>
        <i class="fab fa-instagram nav-icon"></i>
      </div>

      <div class='search'>
        <input type='text' placeholder='Search'></input>
      </div>

      <nav class='nav-btns'>
        <u class="far fa-compass"></u>
        <u class="far fa-heart"></u>
        <u class="far fa-user"></u>
      </nav>
    </header>
  );
};

export default SearchBar;
