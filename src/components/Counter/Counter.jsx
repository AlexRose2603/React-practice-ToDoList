// import { Component } from 'react';
// import {
//   Wrapper,
//   Title,
//   Start,
//   Buttons,
//   IncrBtn,
//   DecrBtn,
// } from './Counter.styled';

// class Counter extends Component {
//   state = {
//     total: 0,
//   };
//   handleClickIncr = event => {
//     // this.setState({ total: 10 });
//     this.setState(prevState => {
//       return { total: prevState.total + 1 };
//     });
//   };

//   handleClickDecr = event => {
//     this.setState(prevState => ({
//       total: prevState.total - 1,
//     }));
//   };
//   render() {
//     return (
//       <Wrapper>
//         <Title>Counter</Title>
//         <Start>{this.state.total}</Start>
//         <Buttons>
//           <IncrBtn onClick={this.handleClickIncr}>+</IncrBtn>
//           <DecrBtn onClick={this.handleClickDecr}>-</DecrBtn>
//         </Buttons>
//       </Wrapper>
//     );
//   }
// }

// export default Counter;
