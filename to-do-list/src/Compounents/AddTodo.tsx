import React, { useState } from "react";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }
    onAdd(title);
    setTitle("");
  };

  return (
    <div className=" flex ">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm
          rounded-r-none 
          rounded-lg focus:ring-blue-500
           focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button className="bg-blue-500 p-2.5 text-white font-medium rounded-lg rounded-l-none " onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
