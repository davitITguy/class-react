import React, { Component } from "react";
// import todo from "./";

class ListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.content.title}</td>
        <td>
          <input type="checkbox" checked={this.props.content.completed} />
        </td>
      </tr>
    );
  }
}
export default ListItem;
