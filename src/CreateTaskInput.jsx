import React, { useState } from 'react';

const CreateTaskInput = (props) => {
  const [text, setText] = useState('');

  const handleTaskCreate = () => {
    props.onCreate(text);
    setText('');
  };

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task_input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn create-task_btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
