import React from "react";
import LinkComponent from "./LinkComponent";

const FilterLinks = ({filters, ...rest}) => {
   return (
      <div className="filter">
         {filters.map(filter => {
            return (
               <LinkComponent
                  key={filter.role}
                  {...filter}
                  {...rest}
               />
            )
         })}
      </div>
   )
};

export default FilterLinks