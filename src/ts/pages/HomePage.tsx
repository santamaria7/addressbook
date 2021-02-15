import React from "react";
import UsersList from "../components/UsersList";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="page">
      <h1 className="page__title">My Address Book</h1>
      <UsersList />
    </div>
  );
};

export default HomePage;
