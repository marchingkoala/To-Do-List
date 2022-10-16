import React, {useState, useEffect} from 'react';

const strikeThrough = {
    textDecorationLine: 'line-through',
}

const opacityControl = {
    opacity: '25%',
}

const SingleTodo = ({toDoName}) => {
  // false = incomplete, true = completed

  const [complete, setComplete] = useState(false);

  // below function allows the state to change to true when the box is checked

  const checkOff = () => {
    setComplete(!complete);
  };

  // below returns a 'check box' beside each task
  // also adds an id or either complete or incomplete
  // i will be utilizing that id's value when i start using filter function

  return (
    <td style={complete ? opacityControl : null}>
      <div className="boxAndTask">
        <input type="checkbox" onClick={checkOff} />
        <div
          id={complete ? "Completed" : "Active"}
          style={complete ? strikeThrough : null}
        >
          {toDoName.thingsToDo}
        </div>
      </div>
    </td>
  );
};

export default SingleTodo;