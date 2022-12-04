import React, { useState, useEffect } from 'react';

const TODO_LENGTH = 10;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, seTterm] = useState(' ');

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await res.json();
      setTodos(json);
    };
    fetchTodos();
  }, []);

  let filterTodos = todos
    .filter(({ title }) => {
      return title.indexOf(term) > -1;
    })
    .slice(0, TODO_LENGTH)
    .map((todo) => (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    ));

  return (
    <div>
      <h2>Todo</h2>
      <input
        text='text'
        value={term}
        onChange={(e) => seTterm(e.target.value)}
      />
      <div>{filterTodos}</div>
    </div>
  );
};

export default TodoList;
