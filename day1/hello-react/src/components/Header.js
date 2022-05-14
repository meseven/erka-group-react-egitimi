import React from "react";

const data = {
  user: {
    name: "Burak",
    isLoggedIn: true,
  },
};

const UserView = (t) => {
  return (
    <div>
      <p>Hoş geldin</p>
      <span>{data.user.name}</span>
    </div>
  );
};

function Header() {
  return (
    <div className="deneme">
      {data.user?.isLoggedIn ? <UserView /> : <div>Giriş Yap</div>}

      <p>
        <span>test</span>
      </p>
      <hr />

      <label htmlFor="name">Name</label>
      <input name="name" id="name" />
    </div>
  );
}

export default Header;
