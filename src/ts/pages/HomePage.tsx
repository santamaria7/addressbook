import React from "react";
import UsersList from "../components/UsersList";
import "./homepage.scss";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="page">
      <h1 className="page__title">My Address Book</h1>
        <Search />
      <UsersList />
    </div>
  );
};

export default HomePage;
