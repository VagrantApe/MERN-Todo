import React, { useState } from "react";
import axios from "axios";

export default function CreateTodo({ history }) {
  const [todoDesc, setTodoDesc] = useState("");
  const [todoResponsible, setTodoResponsible] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const todoCompleted = false;

  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      todoDesc,
      todoResponsible,
      todoPriority,
      todoCompleted
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data))
      .then(() => history.push("/"));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={todoDesc}
            onChange={e => setTodoDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={todoResponsible}
            onChange={e => setTodoResponsible(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todoPriority === "Low"}
              onChange={e => setTodoPriority(e.target.value)}
            />
            <label htmlFor="priorityLow" className="form-check-label">
              Low
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todoPriority === "Medium"}
              onChange={e => setTodoPriority(e.target.value)}
            />
            <label htmlFor="priorityMedium" className="form-check-label">
              Medium
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todoPriority === "High"}
              onChange={e => setTodoPriority(e.target.value)}
            />
            <label htmlFor="priorityHigh" className="form-check-label">
              High
            </label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Create Todo"
          />
        </div>
      </form>
    </div>
  );
}
