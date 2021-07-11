import React from 'react';
import classNames from 'classnames';

const Task = ({ done, text, onChange, id, deleteTask }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item_checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item_delete-btn" onClick={() => deleteTask(id)}></button>
    </li>
  );
};

export default Task;
