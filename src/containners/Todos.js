import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {deleteTodo, toggleTodo} from "../actions";
import {getVisibleTodos} from "../reducers";

import TodoList from "../components/TodoList";

const Todos = withRouter(connect(
    (state, {match}) => {
        return {
            todos: getVisibleTodos(state.todos, match.params.filter),
            visibilityFilter: state.todoVisibility
        }
    },
    {onTodoCardClick: toggleTodo, onDeleteTodoClick: deleteTodo}
)(TodoList));

export default Todos