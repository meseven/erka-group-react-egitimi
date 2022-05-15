import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

// pages
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserDetail />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
