import React, { useState, useEffect } from "react";
import SingleTodo from "./SingleTodo";

let dailyTask = [
  { id: 1, thingsToDo: "Walk Targle", state: "false" },
  { id: 2, thingsToDo: "Water cactus plant", state: "false" },
  { id: 3, thingsToDo: "Check on shrimplettes", state: "false" },
];

const App = () => {
  const [toDo, settoDo] = useState(dailyTask);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFiltered(toDo.filter((task) => task.state === "true"));
        break;
      case "Active":
        setFiltered(toDo.filter((task) => task.state === "false"));
        break;
      default:
        setFiltered(toDo);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [toDo, status]);

  return (
    <div id="main">
      <div id="header">
        <h2>To do List</h2>
      </div>
      <div id="container">
        <table id="taskTable">
          <tbody className="tableBody">
            <tr>
              <th>Daily tasks to be completed</th>
            </tr>
            <tr className="eachTask">
              <td>
                <SingleTodo
                  toDo={toDo}
                  setStatus={setStatus}
                  filtered={filtered}
                />
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
