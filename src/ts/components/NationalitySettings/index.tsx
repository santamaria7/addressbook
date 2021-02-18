import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setNationalityAction } from "../../store/actions/setNationalityAction";

const NationalitySettings = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const changeNatValue = (e: ChangeEvent<HTMLSelectElement>)=> {
        setValue(e.target.value);
    };
    const submitForm = (e: FormEvent)=> {
        e.preventDefault();
        localStorage.setItem('nat',value);
        dispatch(setNationalityAction(value));
    };
    return <form onSubmit={submitForm}>
        <label>Set preferred nationality:</label>
        <select value={value} onChange={changeNatValue}>
            <option value="CH">CH</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
            <option value="GB">GB</option>
        </select>
        <button type="submit">Save</button>
    </form>
}

export default NationalitySettings;