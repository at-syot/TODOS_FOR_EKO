import {v4} from "node-uuid";

const ADD_TODO = "ADD_TODO";
const SET_TODO_TIMEPERIOD = "SET_TODO_TIMEPERIOD";
const MORE_OR_EQUAL5 = "MORE_OR_EQUAL5";
const MORE_OR_EQUAL2 = "MORE_OR_EQUAL2";
const LESS_OR_QEUAL1 = "LESS_OR_QEUAL1";

const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

const SET_TODO_FILTER = "SET_TODO_FILTER";
const ALL = "ALL";
const COMPLETE = "COMPELTE";
const ACTIVE = "ACTIVE";

export {
   ADD_TODO,
   SET_TODO_TIMEPERIOD,
   MORE_OR_EQUAL5,
   MORE_OR_EQUAL2,
   LESS_OR_QEUAL1,

   TOGGLE_TODO,
   DELETE_TODO,

   SET_TODO_FILTER,
   ALL,
   COMPLETE,
   ACTIVE
}

export const addTodo = (title, desc = "", isHaveDesc) => ({
   type: ADD_TODO,
   id: v4(),
   title,
   desc,
   isHaveDesc,
   completed: false
});

export const setTodoPeriodTime = (periodTime) => ({
   type: SET_TODO_TIMEPERIOD,
   periodTime
});

export const toggleTodo = (id) => ({
   type: TOGGLE_TODO,
   id
});

export const deleteTodo = (id) => ({
   type: DELETE_TODO,
   id
});

export const setTodoFilter = (filter) => ({
   type: SET_TODO_FILTER,
   filter
});