import React, {Component} from "react";


import "./styles/App.css";

import VisibilityTodos from "./containners/VisibilityTodos";
import AddTodo from "./containners/AddTodo";
import Todos from "./containners/Todos";

class App extends Component {

   render() {
      return (
         <div className="App">

            <VisibilityTodos />
            <div style={{flex: 5}}>
               <AddTodo />
               <Todos />
            </div>

         </div>
      );
   }
}

export default App;
