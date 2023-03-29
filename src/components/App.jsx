import { nanoid } from 'nanoid';
// import  Header  from './Header/Header';
import { Component } from 'react';
// import Counter from './Counter/Counter';
import { ToDoList } from './ToDoList/ToDoList';
// import todoList from './Data/todo.json';
import { LoginForm } from './LoginForm/LoginForm';
export class App extends Component {
  createUser = data => {
    const newUser = {
      ...data,
      location: 'Ukraine',
      id: nanoid(),
    };
    console.log(newUser);
  };
  render() {
    return (
      <div className="container">
        {/* <Header /> */}
        {/* <Counter /> */}
        <ToDoList />
        <LoginForm createUser={this.createUser} />
      </div>
    );
  }
}
