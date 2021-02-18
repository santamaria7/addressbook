import React, { useState } from "react";
import "./user.scss";
import Details from "../Details";

const UserItem: React.FC<UserProps> = ({ user }) => {
  const [showData, setShowData] = useState(false);
  const showDetails = () => {
    setShowData(true);
  };

  return (
    <>
      <div className="user" onClick={showDetails}>
        <div className="user__img">
          <img
            src={user.picture.thumbnail}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        <div className="user__details">
          <p>{user.login.username}</p>
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{user.email}</p>
        </div>
      </div>
      {showData && (
        <Details user={user} closeAction={() => setShowData(false)} />
      )}
    </>
  );
};

export default UserItem;
