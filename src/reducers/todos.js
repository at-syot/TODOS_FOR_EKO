import {ACTIVE, ADD_TODO, ALL, COMPLETE, DELETE_TODO, TOGGLE_TODO} from "../actions";
import { MORE_OR_EQUAL5, MORE_OR_EQUAL2, LESS_OR_QEUAL1 } from "../actions"

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
      case 'all':
         return todos;
      case 'active':
         return todos.filter(t => !t.completed);
      case 'complete':
         return todos.filter(t => t.completed)
   }
};

const urgently = "urgently"
const medium = "medium"
const fine = "fine"

export const getTodoStatus = (createDate, periodType) => {
   let createDate_day = createDate.getDate()
    let compareDate_day = createDate_day
   switch (periodType) {
       case MORE_OR_EQUAL5:
          compareDate_day += 5

           if (createDate_day >= compareDate_day) {
               return fine
           }else if (createDate_day >= 2) {
             return medium
           }
           return urgently

       case MORE_OR_EQUAL2:
          compareDate_day += 2

           if (createDate_day >= compareDate_day) {
               return fine
           }else if (createDate_day == 2) {
               return medium
           }else if (createDate_day <= 1) {
               return urgently
           }
       case LESS_OR_QEUAL1:
          compareDate_day += 1

           return urgently

   }

}

let date = new Date()
let twomorrow = new Date()
twomorrow.setDate(date.getDate()+5)

console.log(getTodoStatus(twomorrow, MORE_OR_EQUAL5))