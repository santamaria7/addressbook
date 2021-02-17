import React from "react";
import UserItem from "../User";
import Loading from "../Loading";
import "./users.scss";
import { useUsersList } from "./useUsersList";

const UsersList = () => {
  const { loading, list } = useUsersList();
  return (
    <div className="users">
      {list.map((user, index) => {
        return <UserItem user={user} key={`${index}-${user.id.value}`} />;
      })}
      {loading && <Loading />}
    </div>
  );
};

export default UsersList;
