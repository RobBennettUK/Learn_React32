// This script allows us delete items as they are clicked
// This means it must pass information through into the parent file
// We can pass through functions from the parent file

import React from "react";

function ToDoItem2(props) {
  function changeHandle(event) {}

  // Here we must create a function for onClicked. This means it will only get called when the onClick gets called
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.list}</li>
    </div>
  );
}

export default ToDoItem2;
