import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../store/actions/getUsersAction";
import UserItem from "../User";
import Loading from "../Loading";
import "./users.scss";

const UsersList = () => {
  const users: User[] = useSelector<State>((state) => state.users) as User[];
  const loading: boolean = useSelector<State>(
    (state) => state.loading
  ) as boolean;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);
  return (
    <div className="users">
      {loading ? (
        <Loading />
      ) : (
        users.map((user) => {
          return <UserItem user={user} key={user.id.value} />;
        })
      )}
    </div>
  );
};

export default UsersList;
