import React, {useState} from 'react';

const strikeThrough = {
    textDecorationLine: 'line-through',
}

const opacityControl = {
    opacity: '25%',
}

const SingleTodo = ({toDoName}) => {
    // false = incomplete, true = completed
    const [complete, setComplete] = useState(false)
    // below function allows the state to change to true when the box is checked
    const checkOff = ()=>{
        setComplete(!complete);
    }
    // below returns a 'check box' beside each task
    return (
      <tr style={complete ? opacityControl : null}>
        <input type="checkbox" onClick={checkOff} />
        <div style={complete ? strikeThrough : null}>{toDoName}</div>
      </tr>
    );
};

export default SingleTodo;