import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./Store";



render(<Provider store={store}>
    <HomeComponent />
</Provider>, document.getElementById('app'));