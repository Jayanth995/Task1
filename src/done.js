import React, { Component } from "react";
import DoneItems from "./doneitems";
 
class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneitems: []
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
        doneitems: prevState.doneitems.concat(newItem) 
      };
    });
    
     //console.log(newItem);
    }
 
   
  //   this._inputElement.value = "";
  // }
   
   console.log(this.state.doneitems);
     
  e.preventDefault();
  }
   deleteItem(key) {
    var filteredItems = this.state.doneitems.filter(function (item) { console.log(item);
      return (item.key !== key);
    });
    console.log(filteredItems);
    this.setState({
      doneitems : filteredItems
    });
  }
  render() { 
    return (
      <div className="todoListMain">
      <h4> Done </h4>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <DoneItems entries={this.state.doneitems} delete={this.deleteItem}/>
      </div>
    );
  }
}
export default Done;
