import React from 'react'
import VisibilityTodos from "../containners/VisibilityTodos";
import AddTodo from "../containners/AddTodo";
import Todos from "../containners/Todos";

const Root = () => (
    <div className="App">
        <VisibilityTodos />
        <div style={{flex: 5}}>
            <AddTodo />
            <Todos />
        </div>
    </div>
)

export default Root