import React, {useState, useEffect} from 'react';
import SingleTodo from './SingleTodo';
import Filter from './Filter';

const dailyTask = [
  { id: 1, thingsToDo: "Walk Targle" },
  { id: 2, thingsToDo: "Water cactus plant" },
  { id: 3, thingsToDo: "Check on shrimplettes" },
];

const App = () => {

    const [ toDo, settoDo ] = useState(dailyTask);
    const [status, setStatus] = useState('All')
    const [filtered, setfiltered] = useState([]);


    return (
      <div id="main">
        <div id="header">
          <h2>To do List</h2>
        </div>
        <div id="container">
          <div>
            <table id="taskTable">
              <tbody className="tableBody">
                <tr>
                  <th>Daily tasks to be completed</th>
                </tr>
                {filtered.map((item) => {
                  return (
                    <tr className="eachTask" key={item.id}>
                      <SingleTodo
                        toDoName={item}
                      />
                    </tr>
                  );
                })}
                <tr>
                  <Filter
                    toDoName={toDo.map((item) => {
                      return item;
                    })}
                    toDo={toDo}
                    setfiltered={setfiltered}
                    filtered = {filtered}
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default App;