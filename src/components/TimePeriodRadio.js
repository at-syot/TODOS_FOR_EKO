import React from "react";
import {Radio} from "react-bootstrap";

const TimePeriodRadio = ({text, role, onClick, currentPeriodTime}) => {
   return (
      <Radio name="radioGroup"
             inline
             checked={role === currentPeriodTime ? true : false }
             onChange={() => onClick(role) }
      >
         {text}
      </Radio>
   )
};

export default TimePeriodRadio