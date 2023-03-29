import { Component } from 'react';
import { ToDo } from '../ToDo/ToDo';
import todo from '../Data/todo.json';
export class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheck = id => {
    this.setState(prev => {
      return {
        todoList: prev.todoList.map(el => {
          if (el.id === id) {
            return { ...el, completed: !el.completed };
          } else return el;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          {this.state.todoList.map(todo => (
            <ToDo key={todo.id} todo={todo} handleCheck={this.handleCheck} />
          ))}
        </ul>
      </div>
    );
  }
}
