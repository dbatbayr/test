import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={handleDeleteClick} />
      </h3>
    </div>
  );
};

export default Task;