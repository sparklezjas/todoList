import React, { useState } from 'react';

const List = () => {
  const [taskList, setTaskList] = useState([]);
  const [completedTasksIndexes, setCompletedTasksIndexes] = useState([]);

  const addTask = () => {
    const element = document.getElementById('task-input');
    const value = element.value;

    const newTaskList = [...taskList, value];
    setTaskList(newTaskList);
    element.value = '';
  };

  const deleteTask = (currentIndex) => {
    const newArray = [...taskList];
    newArray.splice(currentIndex, 1);
    setTaskList(newArray);
  };

  const taskToggle = (currentIndex) => {
    const completedTasks = [...completedTasksIndexes];
    const index = completedTasks.indexOf(currentIndex);
  
    if (index >= 0) {
      completedTasks.splice(index, 1);
    } else {
      completedTasks.push(currentIndex);
    }
  
    setCompletedTasksIndexes(completedTasks);
  };

  const isCompleted = (currentIndex) => {
    return completedTasksIndexes.indexOf(currentIndex) >= 0;
  };

  return (
    <div style={{ margin: '80px' }}>
      <div>
        <h1
        style={{
          backgroundColor: "#6fa8dd",
          width: '500px',
          height: '40px',
          border: 'none',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          fontSize: '20px',
          padding: '20px',
          paddingTop: "20px",
          color: "white",
          textAlign: "center",
          fontSize:"30px",

        }}> Tasks To Do </h1>
        <input
          style={{
            width: '500px',
            height: '50px',
            backgroundColor: '#efefef',
            border: 'none',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            fontSize: '20px',
            padding: '20px',
          }}
          id="task-input"
          type="text"
          name="input field for tasks"
          placeholder='Enter to do items here...'
        />
      </div>
      <div>
        <button
          style={{
            backgroundColor: '#6fa8dd',
            color: 'white',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            marginTop: "20px",
          }}
          onClick={addTask}
        >
          ADD
        </button>
      </div>
      <div>
        <h2
        style={{
          // textAlign: "center"
          marginTop: "30px",
          marginLeft: "100px",
        }} >~*~*~*~*~ Task List ~*~*~*~*~</h2>
        {taskList.map((task, index) => {
          return (
            <div style={{ marginLeft: '30px' }}>
              <p
                style={{
                  display: 'inline',
                  margin: "15px",
                  textDecoration: isCompleted(index) ? 'line-through' : null,
                  fontSize: '30px',
                }}
              >
                {task}
              </p>
              <input type="checkbox" 
              style={{
                transform: "scale(1.5)"
              }} onChange={() => taskToggle(index)}  />
              <button
                style={{
                  margin: "20px",
                  marginLeft: "20px",
                  backgroundColor: 'black',
                  color: 'white',
                  width: '100px',
                  height: '40px',
                  borderRadius: '10px',
                  border: 'none',
                }}
                onClick={() => deleteTask(index)}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
