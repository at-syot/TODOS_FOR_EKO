import React from "react";
import TimePeriodRadio from "./TimePeriodRadio";
import {FormGroup} from "react-bootstrap";

const TimePeriodRadioGroup = ({timePeriods, ...rest}) => {
   return (
      <FormGroup className="radio-group">
         {timePeriods.map(timePeriod =>
            <TimePeriodRadio
               key={timePeriod.role}
               {...timePeriod}
               {...rest}
            />
         )}
      </FormGroup>
   )
};

export default TimePeriodRadioGroup