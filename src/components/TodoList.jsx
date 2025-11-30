import React, { useEffect } from "react";
import { MdCheckCircle, MdOutlineDeleteForever } from "react-icons/md";

const TodoList = ({ data, checked, onHandleDeleteTask, onHandleCheckTodo }) => {

  return (
    <li className="text-black bg-white p-2 px-8 rounded-4xl w-72 flex justify-between mt-6">
      <span className={checked? "line-through" : "no-underline"}>{data}</span>
      <div className="flex justify-between w-16 gap-4">
        <button className="" onClick={()=>{onHandleCheckTodo(data)}}>
          <MdCheckCircle size={30} color="lightGreen" />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            onHandleDeleteTask(data);
          }}
        >
          <MdOutlineDeleteForever size={30} color="red" />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
