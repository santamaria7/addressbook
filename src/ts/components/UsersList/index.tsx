import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../store/actions/getUsersAction";

const UsersList = () => {
  const users: User[] = useSelector<State>((state) => state.users) as User[];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);
  return (
    <>
      {users.map((user) => {
        <User user={user} key={user.id} />;
      })}
    </>
  );
};

export default UsersList;
