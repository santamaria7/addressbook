import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUsersAction } from "../../store/actions/getUsersAction";

export const useUsersList = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector<State>((state) => state.users) as User[];
  const loading: boolean = useSelector<State>(
    (state) => state.loading
  ) as boolean;
  const { isFiltered, first, last } = useSelector<State>(
    (state) => state.search
  ) as SearchState;

  const list: User[] = useMemo(() => {
    if (isFiltered) {
      const temp = users.filter(
        (user) =>
          user.name.first.toLowerCase() === first?.toLowerCase() ||
          user.name.last.toLowerCase() === last?.toLowerCase()
      );
      return temp.length > 0 ? temp : users;
    }
    return users;
  }, [isFiltered, first, last, users]);

  useEffect(() => {
    dispatch(
      getUsersAction({
        page: 1,
        results: 50,
      })
    );
  }, []);
  return { loading, list };
};
