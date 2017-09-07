import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { getCategories, getPosts } from './actions/index';
import PostWrapper from './components/PostWrapper'
import CreatePost from './components/CreatePost'
import SinglePostWrapper from './components/SinglePostWrapper'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }
  render() {
    return (
      <div className="App">
        <h1><Link to='/' className='indexLink'>Readable</Link></h1>
        <Route exact path="/" component={ PostWrapper }/>
        <Switch>
          <Route exact path='/create' render={()=>( <CreatePost title='Create' />)} />
          <Route exact path='/:category' component={ PostWrapper } />
        </Switch>
        <Switch>
          <Route exact path='/edit/:post_id' render={({match})=>( <CreatePost title='Edit' post_id={match.params.post_id} />)} />
          <Route exact path='/:category/:post_id' render={({match})=>( <SinglePostWrapper post_id={match.params.post_id} /> )} />
        </Switch>
      </div>
    );
  }
}

export default App

