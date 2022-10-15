import React, {useState} from 'react';
import SingleTodo from './SingleTodo';

const dailyTask = [
  { id: 1, thingsToDo: "Walk Targle" },
  { id: 2, thingsToDo: "Water cactus plant" },
  { id: 3, thingsToDo: "Check on shrimplettes" },
];

const App = () => {

    const [ toDo, settoDo ] = useState(dailyTask);

    return (
      <div id="main">
        <div id="header">
          <h2>To do List</h2>
        </div>
        <div id="container">
          <div>
            <table id="taskTable">
              <tbody class="tableBody">
                <tr>
                  <th>Daily tasks to be completed</th>
                </tr>
                {toDo.map((item) => {
                  return (
                    <tr class="eachTask">
                      <td>
                        <SingleTodo toDoName = {item.thingsToDo}/>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th>
                    <button id="all">All</button>{" "}
                    <button id="active">Active</button>{" "}
                    <button id="completed">Completed</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
};

export default App;