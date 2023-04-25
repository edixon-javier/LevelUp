import React from "react";
import "./Loanding.css";

function Loanding() {
  return (
    <li className="TodoItem-loading">
      <div className="LoaderBalls">
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
      </div>
    </li>
  );
}

export { Loanding };
