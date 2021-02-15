import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../store/actions/getUsersAction";
import UserItem from "../User"
const UsersList = () => {
  const users: User[] = useSelector<State>((state) => state.users) as User[];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);
  return (
    <>
      <p>Users</p>
      {users?.map((user) => {
        return <UserItem user={user} key={user.id.value} />;
      })}
    </>
  );
};

export default UsersList;
