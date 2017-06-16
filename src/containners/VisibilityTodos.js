import "react";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import '../styles/visibleFilter.css'

import {setTodoFilter} from "../actions";
import FilterLink from "../components/FilterLinks";

import activeIcon from "../_asserts/images/active.svg";
import allIcon from "../_asserts/images/all.svg";
import completeIcon from "../_asserts/images/complete.svg";


const allFilters = [
    {role: 'all', icon: allIcon},
    {role: 'active', icon: activeIcon},
    {role: 'complete', icon: completeIcon}
];

const VisibilityTodos = withRouter(connect(
    (state, { match }) => {
        return {
            filters: allFilters,
            currentFilter: match.params.filter
        }
    },
    null
)(FilterLink));

export default VisibilityTodos