import {ACTIVE, ADD_TODO, ALL, COMPLETE, DELETE_TODO, TOGGLE_TODO} from "../actions";

export const todos = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            {
               ...action,
               title: action.title,
               desc: action.desc
            }
         ];
      case TOGGLE_TODO:
         return state.map(todo => {
            if (todo.id !== action.id) {
               return todo
            }
            return Object.assign({}, todo, {
               completed: !todo.completed
            })
         });
      case DELETE_TODO:
         return state.filter(todo => todo.id !== action.id)
   }
   return state
};

export const getVisibleTodos = (todos, filter) => {
   switch (filter) {
      case ALL:
         return todos;
      case ACTIVE:
         return todos.filter(t => !t.completed);
      case COMPLETE:
         return todos.filter(t => t.completed)
   }
};