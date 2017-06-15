import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../actions";
import {getVisibleTodos} from "../reducers";

import TodoList from "../components/TodoList";


const Todos = connect(
   (store) => ({
      todos: getVisibleTodos(store.todos, store.todoVisibility),
      visibilityFilter: store.todoVisibility
   }),
   {onTodoCardClick: toggleTodo, onDeleteTodoClick: deleteTodo}
)(TodoList);

export default Todos