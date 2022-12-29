import React from "react";
import { Todoitems } from "./Todoitems";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0
        ? "No work To Do"
        : props.todos.map((todo) => {
            return (
              <>
                <Todoitems todo={todo} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};
