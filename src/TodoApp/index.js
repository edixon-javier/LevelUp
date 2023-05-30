import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import "./TodoApp.css";
import { Modal } from "./Modal";

const defaultTodos = [
  {
    text: "Tenicas de investigacion",
    complete: true,
  },
  {
    text: "Evalucion de proyectos",
    complete: false,
  },
  {
    text: "Contabilidad",
    complete: false,
  },
  {
    text: "Evalucion de proyectos",
    complete: false,
  },
];

function TodoApp() {
  const [todos, setTodos] = useState(defaultTodos);
  const [showModal, setShowModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;

  const onClickButton = () => {
    setShowModal((showModal) => !showModal);
  };

  const completeTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].complete = true;
    setTodos(newTodos);
  };

  const deleteTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const NewTodo = (element) => {
    setTodos([...todos, element]);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>List of tasks</h1>
      <h3>
        You have {totalTodos} to complete and you have done {completedTodos}
      </h3>
      <div className="list-items">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
      <button onClick={onClickButton}>+</button>

      {!!showModal && <Modal NewTodo={NewTodo} CloseModal={CloseModal} />}
    </div>
  );
}

export { TodoApp };
