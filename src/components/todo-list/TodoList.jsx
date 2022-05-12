import React, { Component } from "react";
import ListItem from "./ListItem";
import todo from "./todo.module.css";

class TodoList extends Component {
  render() {
    console.log(this.props.list);
    return (
      <div>
        <table>
          <thead>
            <td>Task</td>
            <td>Complete</td>
          </thead>
          <tbody>
            {this.props.list.map(item => (
              <ListItem content={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TodoList;
