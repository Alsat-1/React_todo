import React, { useState } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = () => {
  const [tasks, setTasks] = useState([
    { text: 'Buy milk', done: false, id: 1 },
    { text: 'Pick up Tom from airport', done: false, id: 2 },
    { text: 'Visit party', done: false, id: 3 },
    { text: 'Visit doctor', done: true, id: 4 },
    { text: 'Buy meat', done: true, id: 5 },
  ]);

  const onCreate = (text) => {
    const newTask = {
      text,
      done: false,
      id: Math.random(),
    };
    if (newTask.text) {
      setTasks(tasks.concat(newTask));
    }
  };

  const onChangeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <div className="todo-list">
      <CreateTaskInput onCreate={onCreate} />
      <ul className="list">
        {sortedList.map((task) => (
          <Task {...task} key={task.id} onChange={onChangeTask} deleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
