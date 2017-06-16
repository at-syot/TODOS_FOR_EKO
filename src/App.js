import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "./stores";
import Root from "./components/Root";

import "./styles/App.css";

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
)

export default App;
