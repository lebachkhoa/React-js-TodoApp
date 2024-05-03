import React from 'react';
import { useState } from 'react';
import TodoList from '../../components/Todolist';
import TodoForm from '../../components/TodoForm';

function ListPage() {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filter, setFilter] = useState('all');

  const handleTodoClick = (idx) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleSHowAllClick = () => {
    setFilter('all');
  };
  const handleShowCompletedClick = () => {
    setFilter('completed');
  };
  const handleSHowNew = () => {
    setFilter('new');
  };

  const todoListRendered = todoList.filter((todo) => filter === 'all' || filter === todo.status);

  const handleTodoFormSubmit = (values) => {
    console.log("Form Submit: ", values);
  };

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}/>

      <h3>Todo List</h3>
      <TodoList todoList={todoListRendered} onTodoClick={handleTodoClick} />
      <button onClick={handleSHowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleSHowNew}>Show New</button>
    </div>
  );
}

export default ListPage;
