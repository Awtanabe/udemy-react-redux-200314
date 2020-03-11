import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import _ from 'lodash'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }  

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        Post Index
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex)