import React, {Component} from 'react';
import TodoItems from './components/todoitems/todoitems'
import AddItem from './components/additem/additem'

class App extends Component {
  state = {
    items : [
      {id:1,name:'Aya',age:23},
      {id:2,name:'Ahmed',age:25},
      {id:3,name:'Alaa',age:26}
    ]
  }
  deleteitem = (id) => {
      // let items=this.state.items
      // let i = items.findIndex(item => item.id === id)
      // items.splice(i,1) // splice == delete
      // this.setState({items})

  //     // or another solution

      let items = this.state.items.filter(item => {
        return item.id !== id
      })
      this.setState({items})
  }
  additem =(item) => {
    item.id= Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState(items)
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center" >Todo List App</h1> 
        <TodoItems items={this.state.items} deleteitem={this.deleteitem} />
        <AddItem additem={this.additem} />
      </div>
    );
  }
}

export default App;
