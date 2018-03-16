import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <li  
              key={item.key}>{item.text}
              <p onClick={() => this.delete(item.key)}>delete</p>
              </li>
  }
  delete(key) { console.log(key);
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;
