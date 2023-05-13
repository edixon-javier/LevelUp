import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalGames">
      <label>{children}</label>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
