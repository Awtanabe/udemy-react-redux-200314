import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {
  
  handleClick(){
    debugger
    this.props.fetchPosts()
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>クリック</button>
        Post Index
      </div>
    )
  }
}

export default connect(null, {fetchPosts: fetchPosts})(PostsIndex)