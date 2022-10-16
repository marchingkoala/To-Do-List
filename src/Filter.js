import React, {useEffect} from 'react';


// set up three buttons named 'all', 'active' and 'complete
// clicked these buttons will 'filter' the tasks accordingly
// only displaying what matches the status

const Filter = ({ toDoName, toDo, setfiltered, filtered }) => {

  //below function is filtering through task's id (marked completed or active depending on check marks)
  //items that's been filtered through is stored in an empty array called 'filtered' on App's state

  const FilterHandler = () => {
    switch (toDoName.id) {
      case "Completed":
        filtered = [];
        setfiltered(toDo.filter((item) => item.id === this.value));
        break;
      case "Active":
        filtered = [];
        setfiltered(toDo.filter((item) => item.id === this.value));
        break;
      default:
        setfiltered(toDo);
    }
  };

  useEffect(()=>{
      FilterHandler();
  }, [toDo, setfiltered])

  return (
    <th className="filterOption">
      <button onClick={FilterHandler} id="All" value="All">
        All
      </button>{" "}
      <button onClick={FilterHandler} id="Active" value="Active">
        Active
      </button>{" "}
      <button onClick={FilterHandler} id="Completed" value="Completed">
        Completed
      </button>
    </th>
  );
};

export default Filter;