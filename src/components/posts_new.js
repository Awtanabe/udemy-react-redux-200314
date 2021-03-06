import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostsNew extends Component {

//   renderTitleField(field){
//     return (
//       <div className="form-group">
//         <label>Title</label>
//         <input 
//           // onChange={field.input.onCHange}これらが..で含まれている
// 　         type="text"
//           {...field.input}
//         />
//       </div>
//     )
//   }

//   renderTagsField(field){
//     return (
//       <div className="form-group">
//         <label>Tags</label>
//         <input 
//           // onChange={field.input.onCHange}これらが..で含まれている
// 　         type="text"
//           {...field.input}
//         />
//       </div>
//     )
//   }

// Title とTags類似なのでまとめる
  renderField(field){
    const {meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          // onChange={field.input.onCHange}これらが..で含まれている
　         type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    console.log(values)

    this.props.createPost(values, () =>{
      this.props.history.push("/")
    })
  }

  
  render() {
    const { handleSubmit } = this.props
  
    return (
      <div>
        Posts new
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            label="Title"
            component={this.renderField}
          />
          <Field
            name="categories"
            label="Categories"
            component={this.renderField}
          />
            <Field
            name="content"
            label="Post Content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}
  
  if ( !values.title) {
    errors.title = 'Enture a usernmae'
  }

  if (!values.categories) {
    errors.categories = 'Enture a categories'
  }

  if (!values.content) {
    errors.content = 'Enture a content'
  }

  return errors
}

// createPost はmapDispatch

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);


// PostsEdit.js 編集でもこれが使えるみたい

// export default reduxForm({
//   form: 'PostsNewForm'
// })(PostsNew);
