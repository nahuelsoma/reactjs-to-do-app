import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
import "../TodoForm/TodoForm.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            A change has occurred in your application data from another browser
            tab
          </p>
          <button
            className="TodoForm-button TodoForm-button-add"
            onClick={toggleShow}
          >
            Reload all data
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
