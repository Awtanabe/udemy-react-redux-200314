import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchPost} from '../actions/index'

class PostsShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchPost(id)
  }


  render() {
    const {post} = this.props
    
    if (!post) {
       return <div>Loding...</div>
    }

    return (
      <div>
        <Link to="/">Bact to Index</Link>
        <h3>{post.title}</h3>
        <h6>cate {post.categories}</h6>
        <p>{post.content}</p>
        POsts show
      </div>
    )
  }
}

// {posts}の書き方は {post: post}

// function mapStateToProps({posts}) {

//   return { posts }
// }

// ownProps == this.prosらしい このidをみているの赤

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost})(PostsShow)
