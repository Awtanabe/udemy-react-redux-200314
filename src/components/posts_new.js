import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  render() {
    return (
      <div>
        Posts new
      </div>
    )
  }
}

export default reudxForm({
  form: 'PostsNewForm'
})(PostsNew);


// PostsEdit.js 編集でもこれが使えるみたい

// export default reudxForm({
//   form: 'PostsNewForm'
// })(PostsNew);
