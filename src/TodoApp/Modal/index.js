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
      alert("you must add a new task");
    }
  };

  const closeModal = () => {
    CloseModal();
  };

  return ReactDOM.createPortal(
    <form className="ModalBackground">
      <div className="modal">
        <label>Add new task</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Write your new task..."
        />
        <div className="button-container">
          <button type="button" onClick={closeModal}>
            ❌
          </button>
          <button type="button" onClick={newElement}>
            ✅
          </button>
        </div>
      </div>
    </form>,
    document.getElementById("modal")
  );
}

export { Modal };
