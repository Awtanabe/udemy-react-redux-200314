import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

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
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          // onChange={field.input.onCHange}これらが..で含まれている
　         type="text"
          {...field.input}
        />
      </div>
    )
  }

  
  render() {
    return (
      <div>
        Posts new
        <form>
          <Field
            name="title"
            label="Title"
            component={this.renderField}
          />
          <Field
            name="Categoris"
            label="categories"
            component={this.renderField}
          />
            <Field
            name="content"
            label="Post Content"
            component={this.renderField}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);


// PostsEdit.js 編集でもこれが使えるみたい

// export default reduxForm({
//   form: 'PostsNewForm'
// })(PostsNew);
