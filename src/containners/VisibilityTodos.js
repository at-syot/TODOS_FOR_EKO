import "react";
import {connect} from "react-redux";
import '../styles/visibleFilter.css'

import {ACTIVE, ALL, COMPLETE, setTodoFilter} from "../actions";
import FilterLink from "../components/FilterLink";

import activeIcon from "../_asserts/images/active.svg";
import allIcon from "../_asserts/images/all.svg";
import completeIcon from "../_asserts/images/complete.svg";

const allFilters = [
   {role: ALL, icon: allIcon},
   {role: ACTIVE, icon: activeIcon},
   {role: COMPLETE, icon: completeIcon}
];

const VisibilityTodos = connect(
   store => ({
      filters: allFilters,
      currentFilter: store.todoVisibility
   }),
   {onClick: setTodoFilter}
)(FilterLink);

export default VisibilityTodos