import { Component } from 'react';
import { Form, Label, Input, SentBtn } from './LoginForm.styled';
export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    wine: 'rose',
  };

  handleChange = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChecked = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  handleRadio = value => {
    this.setState({
      wine: value,
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Email address
          <Input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></Input>
        </Label>
        <Label>
          Password
          <Input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></Input>
        </Label>
        <div>
          <Input
            type="checkbox"
            value={this.state.isChecked}
            onChange={this.handleChecked}
          ></Input>
          <Label>Check me out</Label>
        </div>
        <div>
          <Input
            type="radio"
            // value={this.state.wine === 'rose'}
            checked={this.state.wine === 'rose'}
            onChange={() => this.handleRadio('rose')}
          ></Input>
          <Label>rose</Label>
        </div>
        <div>
          <Input
            type="radio"
            // value={this.state.wine === 'red'}
            checked={this.state.wine === 'red'}
            onChange={() => this.handleRadio('red')}
          ></Input>
          <Label>red</Label>
        </div>
        <SentBtn disabled={!this.state.isChecked} type="submit">
          Submit
        </SentBtn>
      </Form>
    );
  }
}
