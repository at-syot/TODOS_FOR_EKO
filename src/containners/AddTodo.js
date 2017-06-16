import React, {Component} from "react";
import {connect} from "react-redux";
import {addTodo, LESS_OR_QEUAL1, MORE_OR_EQUAL2, MORE_OR_EQUAL5, setTodoPeriodTime} from "../actions";

import {FormControl, FormGroup, Image} from "react-bootstrap";
import add from "../_asserts/images/add.svg";
import "../styles/addtodo.css";

import TimePeriodRadioGroup from "../components/TimePeriodRadioGroup";

class AddTodo extends Component {
   todoTitleInput = null;
   todoDescInput = null;
   timePeriods = [
      {role: MORE_OR_EQUAL5, text: "<= 5"},
      {role: MORE_OR_EQUAL2, text: "<= 2"},
      {role: LESS_OR_QEUAL1, text: ">= 1"}
   ];

   render() {

      const {onClick, onTimePeriodClick, currentPeriodTime} = this.props;

      return (
         <div className="addtodo">

            {/*todo info section*/}
            <div className="form">
               <form>
                  <FormGroup >
                     <FormControl
                        type="text"
                        placeholder="Add Todo here"
                        inputRef={input => this.todoTitleInput = input}
                     />
                  </FormGroup>
                  <FormGroup >
                     <FormControl
                        type="text"
                        placeholder="Desc (optional)"
                        inputRef={input => this.todoDescInput = input}
                     />
                  </FormGroup>

                  <TimePeriodRadioGroup
                     timePeriods={this.timePeriods}
                     onClick={onTimePeriodClick}
                     currentPeriodTime={currentPeriodTime}
                  />

               </form>
            </div>

            {/*add todo action section*/}
            <div className="action">
               <a onClick={() => {
                  let title = this.todoTitleInput.value;
                  let desc = this.todoDescInput.value;
                  let isHaveDesc = desc === "" ? false : true;

                  if (title === 'undefined' || title === "") {
                     alert("Please fill todo's title.");
                     return;
                  }

                  onClick(title,
                      desc,
                      new Date(),
                      currentPeriodTime,
                      isHaveDesc
                  );

                  onTimePeriodClick(MORE_OR_EQUAL5);

                  this.todoTitleInput.value = "";
                  this.todoDescInput.value = "";
               }}>
                  <Image src={add}/>
               </a>

            </div>

         </div>
      )
   }
}

AddTodo = connect(
   (store) => ({
      currentPeriodTime: store.todoTimePeriod
   }),
   {onClick: addTodo, onTimePeriodClick: setTodoPeriodTime}
)(AddTodo);

export default AddTodo