import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import PostWrapper from './components/PostWrapper'
import CreatePost from './components/CreatePost'
import SinglePostWrapper from './components/SinglePostWrapper'

import { connect } from 'react-redux';
import { getCategories } from './actions/index';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getCategories())
  }
  render() {
    return (
      <div className="App">
        <h1><Link to='/' className='indexLink'>Readable</Link></h1>
        <Route exact path="/" component={PostWrapper}/>
        <Switch>
          <Route exact path='/create' render={({history})=>(<CreatePost title='Create' push={history.push} />)} />
          <Route exact path='/:category' component={PostWrapper} />
        </Switch>
        <Switch>
          <Route exact path='/edit/:post_id' render={({match})=>(<CreatePost title='Edit' post_id={match.params.post_id} />)} />
          <Route exact path='/:category/:post_id' render={({match})=>( <SinglePostWrapper post_id={match.params.post_id} /> )} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App)
