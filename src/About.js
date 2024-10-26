import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const About = () => {
  debugger;
  const [users, setUsers] = useState();
  useEffect(() => {
    debugger;

    getUsersAxios();
  }, []);
  const getUsersAxios = () => {
    // By using axios method and we are tring to then,catch method
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const getUsersFetch = async () => {
    //By using fetch method here we are using async and await method
    const result = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "get",
    });
    const data = await result.json();
    console.log(data);
    setUsers(data);
  };
  return (
    <div>
      {users?.map((item, index) => {
        debugger;
        return <p key={`users_${index}`}>{item.name}</p>;
      })}
    </div>
  );
};

export default About;
