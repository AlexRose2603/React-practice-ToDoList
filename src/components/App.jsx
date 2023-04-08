// import { nanoid } from 'nanoid';
// import  Header  from './Header/Header';
import { Component } from 'react';
import { Search } from './Search/Search';
import { ContentInfo } from './ContentInfo/ContentInfo';
// import Counter from './Counter/Counter';
// import { ToDoList } from './ToDoList/ToDoList';
// import todoList from './Data/todo.json';
// import { LoginForm } from './LoginForm/LoginForm';

export class App extends Component {
  state = {
    searchText: '',
  };
  // createUser = data => {
  // const newUser = {
  //   ...data,
  //   location: 'Ukraine',
  //   id: nanoid(),
  // };
  // console.log(newUser);
  // метод який буде зберігати value
  createSearchText = searchText => {
    // буде змінювати стейт, стейт чого - searchText
    this.setState({ searchText });
    // цей метод запускається => приймає в себе searchText, який ми йому прокидуємо
  };
  render() {
    return (
      <div className="container">
        <Search createSearchText={this.createSearchText} />
        <ContentInfo searchText={this.state.searchText} />
        {/* <Header /> */}
        {/* /* <Counter /> */ }
        {/* /* <ToDoList />
        <LoginForm createUser={this.createUser} /> */} 
      </div>
    );
  }
}
