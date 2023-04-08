import { Component } from 'react';
export class Search extends Component {
  state = {
    value: '',
  };
  // подія при зміні інпута
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
    console.log(this.state.value);
  };
  handleSubmit = event => {
    event.preventDefault();
    //   коли ми клікаємо на enter/search у нас викликається метод
    //   createSearchText який прилітає з пропсів (це відбувається тут: -
    //   <Search createSearchText={this.createSearchText} />)
    this.props.createSearchText(this.state.value);
  };
  render() {
    return (
      <>
        <form style={{ margin: 50 }} onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="search"
            style={{ padding: 10, width: 350, fontSize: 16 }}
            onChange={this.handleChange}
            value={this.state.value}
          ></input>
          <button
            type="submit"
            style={{ width: 150, padding: 10, fontSize: 16, borderRadius: 10 }}
          >
            Search
          </button>
        </form>
      </>
    );
  }
}
