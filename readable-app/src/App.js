import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import PostWrapper from './components/PostWrapper'
import CreatePost from './components/CreatePost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable</h1>
        <Route exact path="/" component={PostWrapper}/>
        <Switch>
          <Route exact path='/create' render={({history})=>(<CreatePost title='Create' push={history.push} />)} />
          <Route exact path='/:category' component={PostWrapper} />
        </Switch>
        <Switch>
          <Route exact path='/edit/:post_id' render={({history})=>(<CreatePost title='Edit' />)} />
          <Route exact path='/:category/:post_id' render={({match})=>(<h1>Categories {match.params.post_id}</h1>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
