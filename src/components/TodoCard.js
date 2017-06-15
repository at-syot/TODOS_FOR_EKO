import React from "react";
import {Button, Collapse, Well} from "react-bootstrap";
import "../styles/todoCard.css";

const TodoCard = ({todo, onClick, onDeleteClick}) => {
   return (
      <div className="todo-card" onClick={ () => onClick(todo.id)}>
         <div className="top-containner">
            <div className="title">
               <h4 style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
               }}>
                  {todo.title}
               </h4>
            </div>
            <div className="desc">
               <Button onClick={(e) => {
                  e.stopPropagation();
                  onDeleteClick(todo.id)
               }}>
                  x
               </Button>
            </div>
         </div>

         <Collapse in={todo.isHaveDesc}>
            <div>
               <Well style={{
                  marginBottom: '0px',
                  textDecoration: todo.completed ? 'line-through' : 'none'
               }}>
                  {todo.desc}
               </Well>
            </div>
         </Collapse>
      </div>
   )
};

export default TodoCard