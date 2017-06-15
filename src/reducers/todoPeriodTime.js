import {MORE_OR_EQUAL5, RESET_TIMEPERIOD, SET_TODO_TIMEPERIOD} from "../actions";

export const todoTimePeriod = (state = MORE_OR_EQUAL5, action) => {
   switch (action.type) {
      case SET_TODO_TIMEPERIOD:
         return action.periodTime
   }
   return state
};