import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div>
      <h2>User Detail</h2>

      <button onClick={() => navigate(-1)}>Back</button>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link to={`/users/${Number(id) + 1}`}>Next User ({Number(id) + 1})</Link>
    </div>
  );
}

export default UserDetail;
