import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Post from './components/Post'
import CreatePost from './components/CreatePost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable</h1>
        <Route exact path="/" component={Post}/>
        <Switch>
          <Route exact path='/create' render={({history})=>(<CreatePost title='Create' store={this.props.store} push={history.push} />)} />
          <Route exact path='/:category' component={Post} />
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
