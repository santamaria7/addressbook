import React from "react";
import LoadingIcon from "../../../assets/spinner.gif";
const Loading = () => {
    return <div className="loading">
        <img src={LoadingIcon} alt="Data is loading" />
    </div>
};

export default Loading;