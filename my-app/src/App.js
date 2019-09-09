import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodos';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed : false
      },
      {
        id: 2,
        title: "Cook food",
        completed : true
      },
      {
        id: 3,
        title: "Go to library",
        completed : false
      }
    ]
  }

  /*
  Look at TodoITems for more documentation. This class wants to change the state of complete of items
  It ladders up to this class to do so. Now we can change the state.
   */
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed //toggle complete.
      }
      return todo;
    })})
  }
  //delTodo
  delTodo = (id) => {
    //loop through the todos and filter so that the current id is not included
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  //addTodo
  addTodo = (title) => {
    const newTodo = { id: uuid.v4() , title: title, completed:false}
    this.setState({todos:[...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className="App">
        <div className="container" >
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
