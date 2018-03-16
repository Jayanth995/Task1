import React, { Component } from "react";
import InproItems from "./inproitems";
 
class Inprogress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inproitems: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    if (this._inputElement.value !== "") {
     
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return { 
        inproitems: prevState.inproitems.concat(newItem) 
      };
    });
    
     //console.log(newItem);
    }
 
   
  //   this._inputElementpro.value = "";
  // }
   
   console.log(this.state.inproitems);
     
  e.preventDefault();
  }
  deleteItem(key) {
  var filteredItems = this.state.inproitems.filter(function (item) {
    return (item.key !== key);
  });
  console.log(filteredItems);
  this.setState({
    inproitems: filteredItems
  });
}

  render() { 
    return (
      <div className="todoListMain">
        <h4>In Progress </h4>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <InproItems entries={this.state.inproitems} delete={this.deleteItem}/>
      </div>
    );
  }
}
export default Inprogress;
