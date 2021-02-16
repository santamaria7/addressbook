import React, { useEffect, useMemo } from "react";
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
  const { isFiltered, first, last } = useSelector<State>(
    (state) => state.search
  ) as SearchState;
  const dispatch = useDispatch();

  const list = useMemo(() => {
    if (isFiltered) {
      const temp = users.filter(
        (user) =>
          user.name.first.toLowerCase() === first ||
          user.name.last.toLowerCase() === last
      );
      return temp.length > 0 ? temp : users;
    }
    return users;
  }, [isFiltered, first, last, users]);

  useEffect(() => {
    dispatch(
      getUsersAction({
        page: 1,
        results: 10,
      })
    );
  }, []);
  return (
    <div className="users">
      {loading ? (
        <Loading />
      ) : (
        list.map((user, index) => {
          return <UserItem user={user} key={`${index}-${user.id.value}`} />;
        })
      )}
    </div>
  );
};

export default UsersList;
