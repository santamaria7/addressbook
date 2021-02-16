import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findUserAction } from "../../store/actions/findUserAction";
import { resetListAction } from "../../store/actions/resetListAction";

export const useSearch = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [fixed, setFixed] = useState(false);
  const dispatch = useDispatch();
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      findUserAction({
        first,
        last,
      })
    );
  };

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0 && last.length === 0) {
      // This happens when user deletes the text in the field
      dispatch(resetListAction());
    }
    setFirst(e.target.value);
  };
  const handleLastChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0 && first.length === 0) {
      // This happens when user deletes the text in the field
      dispatch(resetListAction());
    }
    setLast(e.target.value);
  };
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    submitForm,
    handleFirstChange,
    handleLastChange,
    fixed,
    first,
    last,
  };
};
