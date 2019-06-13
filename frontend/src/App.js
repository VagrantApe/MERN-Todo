import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
