// This script allows us to line through items as they are clicked

import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, setStrike] = useState(false);

  function changeHandle(event) {
    setStrike(!strike);
    console.log(strike);
  }

  return (
    <div>
      <li
        onClick={changeHandle}
        style={{ textDecoration: strike ? "line-through" : "none" }}
      >
        {props.list}
      </li>
    </div>
  );
}

export default ToDoItem;
