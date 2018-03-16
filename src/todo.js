import React, { Component } from "react";
import TodoItems from "./TodoItems";

class Todo extends Component {

  constructor(props) {
    super(props);
    
    console.log(localStorage.getItem('items'));
    this.state = {
      items : []
    }
    
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
        items: prevState.items.concat(newItem) 
      };
    });
    
     //console.log(newItem);
    }
 
   
  //   this._inputElement.value = "";
  // }
   
   
     
  e.preventDefault();
  }
  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) { console.log(item);
    return (item.key !== key);
  });
  console.log(filteredItems);
  this.setState({
    items: filteredItems
  });
}
  render() { 
        // console.log(JSON.parse(localStorage.getItem('items')).items.length == 0);
        // if(JSON.parse(localStorage.getItem('items')).items.length !== 0){
        //   //localStorage.setItem('items',{"items":[]});
        // }else{

        // }
        // if(this.state.items.length !== 0 && JSON.parse(localStorage.getItem('items')).items.length !== 0){
        //   localStorage.setItem('items',{"items":[]});
        // }else{
        //   localStorage.setItem('items',JSON.stringify(this.state));
        // }
      
    
    
    return (
      <div className="todoListMain">
      <h4> Todo </h4>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
export default Todo;
