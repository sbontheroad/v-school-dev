export function createPost (post) {
  return {
  type: "CREATE_POST",
  post: post
  }
}

export function close (index) {
  return {
    type: "DELETE_POST",
    index: index
  }
}

export function update (post, index) {
  return {
    type: "UPDATE_POST",
    post,
    index
  }
}
