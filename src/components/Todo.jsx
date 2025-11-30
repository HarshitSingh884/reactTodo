import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState(()=>{
    const initialTask = localStorage.getItem("todoApp");
    
    if(!initialTask){
      return [];
    }

    return JSON.parse(initialTask);

  });

  const handleFormSubmit = (inputObj) => {
    const taskAdded = task.find(
      (item) => item.content.toLowerCase() == inputObj.content.toLowerCase()
    );

    if (!taskAdded) {
      setTask((prev) => [...prev, inputObj]);
    } else {
      console.log("Task Already Added");
    }
  };

  const deleteTask = (currTask) => {
    const filteredArray = task.filter((item) => item.content != currTask);
    setTask(filteredArray);
  };

  const clearAllTasks = () => {
    setTask([]);
  };

  const handleCheckTodo = (data) => {

    const updatedTasks = task.map((obj)=>{
      if(obj.content==data){
        return {...obj,checked:!obj.checked};
      }
      return obj;
    })

    setTask(updatedTasks)
  };


  //Add Data to Local Storage
  localStorage.setItem("todoApp",JSON.stringify(task));


  return (
    <section className="todo-container flex flex-col justify-center items-center gap-4 mt-16">
      <header className="font-bold text-2xl text-white flex flex-col items-center">
        <h1>Todo App</h1>
        <TodoDate />
      </header>

      <TodoForm handleFormSubmit={handleFormSubmit} />

      <section className="flex flex-col items-center gap-10">
        <ul>
          {task.map((currTask, index) => (
            <TodoList
              key={index}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTask={deleteTask}
              onHandleCheckTodo={handleCheckTodo}
            />
          ))}
        </ul>

        <button
          className="text-white bg-red-400 p-2 px-6 rounded-2xl"
          onClick={clearAllTasks}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
