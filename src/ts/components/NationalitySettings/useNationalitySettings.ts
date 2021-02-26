import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { setNationalityAction } from "../../store/actions/setNationalityAction";
import { emptyUsersListAction } from "../../store/actions/emptyUsersListAction";

export const useNationalitySettings = () => {
  const dispatch = useDispatch();
  const { goBack } = useHistory();

  const n = useSelector<State>((state) => state.nationality) as string;

  const [value, setValue] = useState(n);
  const [showSuccess, setShowSuccess] = useState(false);

  const changeNatValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("nat", value);
    await dispatch(setNationalityAction(value));
    await dispatch(emptyUsersListAction());
    await setShowSuccess(true);
    goBack();
  };
  return {
    submitForm,
    value,
    changeNatValue,
    showSuccess,
  };
};
