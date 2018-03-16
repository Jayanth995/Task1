import React, { Component } from "react";
 
class InproItems extends Component {
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
    var inproEntries = this.props.entries;
    var listItems = inproEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default InproItems;
