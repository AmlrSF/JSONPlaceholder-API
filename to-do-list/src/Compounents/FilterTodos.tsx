import React from "react";

interface FilterTodosProps {
  onFilterChange: (filter: string) => void;
}

const FilterTodos: React.FC<FilterTodosProps> = ({ onFilterChange }) => {
  return (
    <div className="flex gap-4 items-center justify-between py-2 border-b">
      <button
        className="bg-blue-500  text-white font-medium rounded-full px-4 py-1 "
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className="bg-blue-500  text-white font-medium rounded-full px-4 py-1 "
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className="bg-blue-500  text-white font-medium rounded-full px-4 py-1 "
        onClick={() => onFilterChange("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterTodos;
