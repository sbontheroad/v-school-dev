import axios from "axios";

export function addItem (post) {
  return {
    type: ADD_ITEM,
    post: post
  }
}
