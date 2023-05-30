import React from "react";
import "./TodoItem.css";


function TodoItem(props) {


  return (
    <React.Fragment>
      <li className="TodoItem">
        <span
          onClick={props.onComplete}
          className={`Icon Icon-check ${
            props.complete && "Icon-check--active"
          }`}
        >
          ✓
        </span>
        <p
          onClick={props.onComplete}
          className={`${props.complete && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span onClick={props.onDelete} className="Icon Icon-delete">
          ❌
        </span>
      </li>
    </React.Fragment>
  );
}

export { TodoItem };
