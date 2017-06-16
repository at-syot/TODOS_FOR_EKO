import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Provider} from "react-redux";
import store from "./stores";

const TodosApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    <Router >
        <Route path='/:filter' component={TodosApp}/>
    </Router>,
   document.getElementById('root')
);
