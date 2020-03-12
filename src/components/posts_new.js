import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  renderTitleField(field){
    return (
      <div>
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
            component={this.renderTitleField}
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
