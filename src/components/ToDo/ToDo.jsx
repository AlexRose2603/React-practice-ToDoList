import React from 'react';
import { TodoItem, Duty, Input, Buttons, CloseBtn } from './ToDo.styled';
export const ToDo = ({ todo, handleCheck }) => {
  return (
    <TodoItem>
      <Duty>
        <Input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            handleCheck(todo.id);
          }}
        />
        {todo.title}
      </Duty>
      <Buttons />
      <CloseBtn>Close</CloseBtn>
    </TodoItem>
  );
};
