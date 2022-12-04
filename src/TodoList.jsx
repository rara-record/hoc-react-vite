import HOC from './HOC';

const TODO_LENGTH = 10;

const TodoList = ({ data }) => {
  let renderTodos = data.slice(0, TODO_LENGTH).map((todo) => (
    <div key={todo.id}>
      <p>
        <strong>{todo.title}</strong>
      </p>
    </div>
  ));

  return <div>{renderTodos}</div>;
};

const SearchTodos = HOC(TodoList, 'todos');
export default SearchTodos;
