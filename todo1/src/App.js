import React, { Component } from 'react';
import TodoItems from './components/TodoItems/todoItems';
import AddItem from './components/AddItem/AddItem';


class App extends Component {
  state = {
    items: [
      {id:1, plan:"shopping", date:1},
      {id:2, plan:"study", date:4}
    ]
  }

  deleteItem = (id) =>{
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
      <div className="App container">
      <h1 className="text-center">Have A Plan</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
