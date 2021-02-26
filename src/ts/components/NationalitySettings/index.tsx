import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNationalityAction } from "../../store/actions/setNationalityAction";
import { useHistory } from "react-router-dom";
import { emptyUsersListAction } from "../../store/actions/emptyUsersListAction";
import "./settings.scss";
import { useNationalitySettings } from "./useNationalitySettings";

const NationalitySettings = () => {
 const {submitForm, value, changeNatValue, showSuccess} = useNationalitySettings()

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
