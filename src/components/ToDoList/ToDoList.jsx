// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ToDo } from '../ToDo/ToDo';
// import todo from '../Data/todo.json';
// export class ToDoList extends Component {
//   state = {
//     todoList: todo,
//     newTodo: '',
//   };

//   handleCheck = id => {
//     this.setState(prev => {
//       return {
//         todoList: prev.todoList.map(el => {
//           if (el.id === id) {
//             return { ...el, completed: !el.completed };
//           } else return el;
//         }),
//       };
//     });
//   };
//   handleCreate = event => {
//     event.preventDefault();
//     this.setState(prev => {
//       return {
//         todoList: [
//           ...prev.todoList,
//           { id: nanoid(), title: this.state.newTodo, completed: false },
//         ],
//       };
//     });
//   };

//   handleChange = ({ target: { value } }) => {
//     this.setState({ newTodo: value });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleCreate}>
//           <input
//             type="search"
//             value={this.state.newTodo}
//             onChange={this.handleChange}
//           ></input>
//           <button type="submit">Create</button>
//         </form>
//         <h1>To Do List</h1>
//         <ul>
//           {this.state.todoList.map(todo => (
//             <ToDo key={todo.id} todo={todo} handleCheck={this.handleCheck} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
