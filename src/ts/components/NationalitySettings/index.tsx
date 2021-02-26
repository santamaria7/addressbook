import * as React from "react";
import "./settings.scss";
import { useNationalitySettings } from "./useNationalitySettings";

const NationalitySettings = () => {
  const {
    submitForm,
    value,
    changeNatValue,
    showSuccess,
  } = useNationalitySettings();

  return (
    <div className="settings">
      <form onSubmit={submitForm} role="form">
        <label htmlFor="select">Set preferred nationality:</label>
        <select value={value} onChange={changeNatValue} id="select">
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
