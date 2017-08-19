import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable</h1>
        <Route  exact path='/' component={Post} />
        <Route  exact path='/:category' render={({match})=>(<h1>Categories {match.params.category}</h1>)} />
        <Route  exact path='/:category/:post_id' render={({match})=>(<h1>Categories {match.params.post_id}</h1>)} />
      </div>
    );
  }
}

export default App;
