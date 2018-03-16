import React, { Component } from "react";
 
class DoneItems extends Component {
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
delete(key) {
    this.props.delete(key);
  }

 
  render() {
    var doneEntries = this.props.entries;
    var listItems = doneEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default DoneItems;
