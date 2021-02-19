import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNationalityAction } from "../../store/actions/setNationalityAction";
import { useHistory } from "react-router-dom";
import { emptyUsersListAction } from "../../store/actions/emptyUsersListAction";
import "./settings.scss";

const NationalitySettings = () => {
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

  return (
    <div className="settings">
      <form onSubmit={submitForm}>
        <label>Set preferred nationality:</label>
        <select value={value} onChange={changeNatValue}>
          <option value="CH">CH</option>
          <option value="ES">ES</option>
          <option value="FR">FR</option>
          <option value="GB">GB</option>
        </select>
        <button type="submit">Save</button>
        {showSuccess && <p>Successfully Saved</p>}
      </form>
    </div>
  );
};

export default NationalitySettings;
