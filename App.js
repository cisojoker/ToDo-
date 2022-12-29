import "./styles.css";
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todo";
import { AddTodo } from "./Mycomponents/AddTodo";
import { Footer } from "./Mycomponents/FooTer";
import React, { useState } from "react";
export default function App() {
  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // this type of deleting doesnt work
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    console.log("I am adding this todo", title, desc);
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="MyToDoList" searchbar={true} />
      <Todos todos={todos} onDelete={onDelete} />

      <AddTodo addTodo={addTodo} />
      <Footer />
    </>
  );
}
