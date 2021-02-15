import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./ts/store";
import HomePage from "./ts/pages/HomePage";



render(<Provider store={store}>
    <HomePage />
</Provider>, document.getElementById('app'));