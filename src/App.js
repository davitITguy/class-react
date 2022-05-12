import { Component } from "react";
import "./App.css";
import TodoHeader from "./components/Header";
import Input from "./components/input/Input";
import TodoList from "./components/todo-list/TodoList";

class App extends Component {
  state = {
    toDoList: [
      { title: "jemala", completed: true },
      { title: "jemala", completed: true },
      { title: "jemala", completed: false },
    ],
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <Input />
        <TodoList list={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
