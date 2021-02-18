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

  const nationality = useSelector<State>(
    (state) => state.nationality
  ) as string;

  const list: User[] = useMemo(() => {
    if (isFiltered) {
      const temp = users.filter((user) => filterUsers(user, first, last));
      return temp.length > 0 ? temp : [];
    }
    return users;
  }, [isFiltered, first, last, users]);

  const handleScroll = useCallback(() => {
    const bottomOfWindow = checkScrollIsAtBottom();
    if (bottomOfWindow && offset && !loading) {
      const payload: getUsersPayload = {
        page: offset + 1,
        seed,
      };
      if(nationality.length > 0){
        payload.nat = nationality;
      }
      dispatch(
        getUsersAction(payload)
      );
    }
  }, [seed, offset, loading]);

  useEffect(() => {
    const savedNat = localStorage.getItem('nat');
    const payload: getUsersPayload = {
      page: 1,
    };
    if(savedNat){
      payload.nat = savedNat;
    }
    dispatch(
      getUsersAction(payload)
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

  useEffect(() => {
   nationality.length > 0 && dispatch(
      getUsersAction({
        page: 1,
        nat: nationality,
      })
    );
  }, [nationality]);

  return { loading, list };
};
