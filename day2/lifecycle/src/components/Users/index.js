import React, { useEffect, useState } from "react";
import Config from "../../config";
import Detail from "./Detail";
import "./styles.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(`${Config.BASE_ENDPOINT}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedId) {
      setDetailLoading(true);

      fetch(`${Config.BASE_ENDPOINT}/users/${selectedId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setUserDetail(data);
          setDetailLoading(false);
        });
    }
  }, [selectedId]);

  return (
    <div className="container">
      <div>
        <h2>Users</h2>

        {loading && <div>Loading...</div>}
        {users.map((user) => (
          <div
            key={user.id}
            className="list-item"
            onClick={() => setSelectedId(user.id)}
          >
            {user.name}
          </div>
        ))}
      </div>

      {userDetail && (
        <Detail detailLoading={detailLoading} userDetail={userDetail} />
      )}
    </div>
  );
}

export default Users;
