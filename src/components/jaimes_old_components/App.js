import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <body>
      <Link to='/'>
        Click here for Chirp Feed
      </Link>
      <Feed />
    </body>
  );
}

export default App;
