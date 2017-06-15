import React from "react";
import Link from "./Link";

const FilterLink = ({filters, ...rest}) => {
   return (
      <div className="filter">
         {filters.map(filter => {
            return (
               <Link
                  key={filter.role}
                  {...filter}
                  {...rest}
               />
            )
         })}
      </div>
   )
};

export default FilterLink