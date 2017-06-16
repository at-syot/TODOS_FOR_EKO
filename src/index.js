import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

import "./styles/index.css";

ReactDOM.render(
    <Router >
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/:filter' component={App}/>
        </div>
    </Router>,
   document.getElementById('root')
);
