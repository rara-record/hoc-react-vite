import HOC from './HOC';

const UserList = ({ data }) => {
  console.log(data);

  let renderUsers = data.map((user) => (
    <div key={user.id}>
      <p>
        <strong>{user.name}</strong>
      </p>
    </div>
  ));

  return <div>{renderUsers}</div>;
};

const SearchUsers = HOC(UserList, 'users');
export default SearchUsers;
