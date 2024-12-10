import React, { useState, useEffect } from "react";
import AddTodo from "./Compounents/AddTodo";
import FilterTodos from "./Compounents/FilterToDos";
import TodoList from "./Compounents/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Todo } from "./types/Todo";

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState("all");

  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data: Todo[] = await response.json();
        setTodos(data.slice(0, 20)); 
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    if (todos.length === 0) {
      fetchTodos();
    }
  }, []); 

  const filteredTodos = todos.filter(
    (todo) =>
      filter === "all" ||
      (filter === "completed" && todo.completed) ||
      (filter === "pending" && !todo.completed)
  );

  const addTodo = (title: string) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full flex justify-center items-center flex-col mt-10">
      <h1 className="text-3xl font-bold mb-5">To-Do List</h1>
      <div className="w-[350px]">
        <AddTodo onAdd={addTodo} />
        <FilterTodos onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
