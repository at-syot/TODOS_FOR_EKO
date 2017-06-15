import {ALL, SET_TODO_FILTER} from "../actions";

export const todoVisibility = (state = ALL, action) => {
   switch (action.type) {
      case SET_TODO_FILTER:
         return action.filter
   }

   return state
};