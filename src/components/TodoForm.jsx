import React, { useState } from "react";

const TodoForm = ({ handleFormSubmit }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleTodoFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.content) {
      return;
    }
    
    handleFormSubmit(inputValue);

    setInputValue({});
  };

  return (
    <section className="form">
      <form className="flex" onSubmit={handleTodoFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input rounded-l-4xl p-3 bg-white"
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="todo-btn rounded-r-4xl bg-blue-200 p-3"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
