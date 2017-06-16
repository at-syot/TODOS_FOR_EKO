import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from './components/Root'

import "./styles/index.css";

ReactDOM.render(
    <Router >
        <div>
            <Route exact path='/' component={Root}/>
            <Route path='/:filter' component={Root}/>
        </div>
    </Router>,
   document.getElementById('root')
);
