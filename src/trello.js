import React, { Component } from 'react';
import Todo from './todo.js';
import Inprogress from './inpro.js';
import Done from './done.js';
class Trello extends Component {
  render() {
    return (
      <div className="row">
      	<div className="column"><Todo/></div>
      	<div className="column"><Inprogress/></div>
      	<div className="column"><Done/></div>
      </div>
    );
  }
}

export default Trello;