import React from "react";
import "./user.scss";

const UserItem: React.FC<UserProps> = ({ user }) => {
  const showDetails = () => {
    // TODO: open details modal
    console.log(user);
  };

  return (
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
  );
};

export default UserItem;
