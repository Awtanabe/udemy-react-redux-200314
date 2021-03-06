import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router-dom'
import _ from 'lodash'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }  

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <Link to={`/posts/${post.id}`}>
         <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
        </Link>
      )
    })
  }
  render() {
    console.log(this.props.posts)
    return (
      <div>
         IndexPage
         <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Create Post
          </Link>
         </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
  // return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex)