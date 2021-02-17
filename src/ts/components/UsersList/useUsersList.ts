import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { getUsersAction } from "../../store/actions/getUsersAction";
import { checkScrollIsAtBottom } from "../../utils/checkScrollIsAtBottom";
import { filterUsers } from "../../utils/filterUsers";

export const useUsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector<State>((state) => state.users) as User[];
  const loading = useSelector<State>((state) => state.loading) as boolean;
  const { isFiltered, first, last } = useSelector<State>(
    (state) => state.search
  ) as SearchState;
  const { offset, seed } = useSelector<State>(
    (state) => state.pagination
  ) as PaginationType;
  const list: User[] = useMemo(() => {
    if (isFiltered) {
      const temp = users.filter(
        (user) => filterUsers(user, first, last)
      );
      return temp.length > 0 ? temp : [];
    }
    return users;
  }, [isFiltered, first, last, users]);
  const handleScroll = useCallback(() => {
    const bottomOfWindow = checkScrollIsAtBottom();
    if (bottomOfWindow && offset && !loading) {
      dispatch(
        getUsersAction({
          page: offset + 1,
          seed,
        })
      );
    }
  }, [seed, offset, loading]);

  useEffect(() => {
    dispatch(
      getUsersAction({
        page: 1,
      })
    );
  }, []);
  useEffect(() => {
    // handleScroll depends on seed and offset. if we put events in the other useEffect,
    // the callback will not update when handleScroll and seed are updated,
    // so we won't be able to get the correct data.
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return { loading, list };
};
