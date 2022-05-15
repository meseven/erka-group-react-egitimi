import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/users`
      );

      setUsers(data);
    })();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
