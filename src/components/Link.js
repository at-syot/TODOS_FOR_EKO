import React from "react";
import {Image} from "react-bootstrap";

const Link = ({icon, role, onClick, currentFilter}) => {
   return (
      <a onClick={() => onClick(role)}>
         <Image src={icon} style={{
            opacity: role === currentFilter ? '0.5' : '1'
         }}/>
      </a>
   )
};

export default Link