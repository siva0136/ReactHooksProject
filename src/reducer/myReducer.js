import { init } from "../utils/init";
export const myReducer = (state = init, action) => {
  switch (action.type) {
    case "USERS":
      return { ...state, users: action.payload };
    case "POSTS":
      return { ...state, posts: action.payload };
    case "PHOTOS":
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
