import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
const ReduxSaga = () => {
  const dispatch = useDispatch();
  const fnGetUsers = () => {
    debugger;
    dispatch({
      type: "UESRS_SAGA",
    });
  };
  const fnGetPosts = () => {
    dispatch({
      type: "POSTS_SAGA",
    });
  };
  const fnGetPhotots = () => {
    dispatch({
      type: "PHOTOS_SAGA",
    });
  };
  return (
    <div>
      <button onClick={fnGetUsers}>Get Users</button>
      <button onClick={fnGetPosts}>Get Posts</button>
      <button onClick={fnGetPhotots}>Get Photos</button>
      <button>
        <Link to="orders">Orders</Link>
      </button>
      <button>
        <Link to="profile">Profile</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default ReduxSaga;
