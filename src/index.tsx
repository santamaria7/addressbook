import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./ts/store";
import App from "./ts/App";
import "./css/general.scss";


render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));