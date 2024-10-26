import React from "react";
import ServiceCall from "./Service";
import { useDispatch, useSelector } from "react-redux";
const Redux = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => {
    return state.myReducer.posts;
  });
  const fnGetUser = async () => {
    debugger;
    const data = await ServiceCall.getCall(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: "USERS",
      payload: data.data,
    });
  };
  const fnGetPosts = async () => {
    const postsData = await ServiceCall.getCall(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: "POSTS",
      payload: postsData.data,
    });
  };
  return (
    <div>
      <button onClick={fnGetUser}>Get Users</button>
      <button onClick={fnGetPosts}>Get Posts</button>
      <p>{stateData && stateData?.[0]?.title}</p>
    </div>
  );
};

export default Redux;
