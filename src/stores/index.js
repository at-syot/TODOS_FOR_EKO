import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger";

import {todos, todoTimePeriod, todoVisibility} from "../reducers";
import {loadTodoState, save} from "./localStorageManager";

const setupStore = () => {

   let middleWares = [];
   if (process.env.NODE_ENV === "development") {
      middleWares.push(logger)
   }

   const middleWare = applyMiddleware(...middleWares);
   const todo = combineReducers({
      todos,
      todoTimePeriod,
      todoVisibility
   });

   const preloadState = loadTodoState();
   const store = createStore(
      todo,
      preloadState,
      middleWare
   );

   store.subscribe(() => {
      save(store.getState())
   });

   return store
};

export default setupStore()