import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {deleteTodo, toggleTodo} from "../actions";
import {getVisibleTodos} from "../reducers";

import TodoList from "../components/TodoList";

const Todos = withRouter(connect(
    (state, {match}) => {
        const { filter } = match.params
        const visibleFilter = typeof filter === 'undefined' ? 'all' : match.params.filter
        return {
            todos: getVisibleTodos(state.todos, visibleFilter),
            visibilityFilter: state.todoVisibility
        }
    },
    {onTodoCardClick: toggleTodo, onDeleteTodoClick: deleteTodo}
)(TodoList));

export default Todos