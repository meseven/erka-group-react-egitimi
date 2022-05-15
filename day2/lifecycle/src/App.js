import React, { useEffect } from "react";
// import Counter from "./components/Counter";
// import Users from "./components/Users";

import axios from "axios";
import Test from "./components/Test";

// async/await

function App() {
  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   const firstId = res.data[0].id;
    //   axios(
    //     `https://jsonplaceholder.typicode.com/posts?userId=${firstId}`
    //   ).then((res) => {
    //     console.log(`Posts for ${firstId} id`, res.data);
    //   });
    // });
    // getData();
  }, []);

  useEffect(() => {}, []);

  const getData = async () => {
    try {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );

      console.log("users", users);
      console.log("posts", posts);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      {/* <h3>Users</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <hr />

      <h3>Posts</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre> */}

      <Test />
    </div>
  );
}

export default App;
