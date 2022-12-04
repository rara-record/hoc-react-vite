import UserList from './UserList';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>Higher Order Component </h1>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <UserList />
        <TodoList />
      </section>
    </div>
  );
};

export default App;
