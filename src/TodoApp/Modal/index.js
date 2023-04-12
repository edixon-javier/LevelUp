import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ NewTodo, CloseModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const newElement = () => {
    if (newTodoValue) {
      NewTodo({
        text: newTodoValue,
        complete: false,
      });
      CloseModal();
    } else {
      alert("Debes agregar un nuevo Todo");
    }
  };

  const closeModal = () => {
    CloseModal();
  };

  return ReactDOM.createPortal(
    <form className="ModalBackground">
      <label>Agregar nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu nueva tarea."
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={closeModal}>
          ❌
        </button>
        <button type="button" onClick={newElement}>
          ✅
        </button>
      </div>
    </form>,
    document.getElementById("modal")
  );
}

export { Modal };
