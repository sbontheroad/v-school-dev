let defaultState = {
  posts: []
}

// let handleRemove = (index) => {
//   let post = [...this.state.posts]
//   post.splice(index, 1);
//   this.setState({
//     ...this.state,
//     post: post
//   });
// }

// updateValue(event) {
//   this.setState({
//     ...this.state,
//     inputValue: event.target.value
//   });
// }

const mainReducer = (state = defaultState, action) => {
  if (action.type === "CREATE_POST") {
    // console.log(state.posts);
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  } else if (action.type === "DELETE_POST") {
    console.log("here");
    let posts = [...state.posts]
    posts.splice(action.index, 1);
    return {
      ...state,
      posts: posts
    }
  } else if (action.type === "UPDATE_POST") {
      let posts = [...state.posts];
      posts[action.index] = action.post;
      return {
        ...state,
        posts: posts
      }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
