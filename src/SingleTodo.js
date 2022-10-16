import React, { useState, useEffect } from "react";
import Task from "./task";

const SingleTodo = ({ toDo, setStatus, filtered }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {filtered.map((item) => {
        return (
          <div className="eachTask" key={item.id}>
            <Task toDoName={item} />
          </div>
        );
      })}
      <div className="filterOption">
        <button onClick={statusHandler} id="All" value="All">
          All
        </button>{" "}
        <button onClick={statusHandler} id="Active" value="Active">
          Active
        </button>{" "}
        <button onClick={statusHandler} id="Completed" value="Completed">
          Completed
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
