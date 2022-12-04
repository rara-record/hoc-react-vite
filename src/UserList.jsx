import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [term, seTterm] = useState(' ');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      setUsers(json);
    };
    fetchUsers();
  }, []);

  let filterUsers = users
    .filter(({ name }) => {
      return name.indexOf(term) > -1;
    })
    .map((user) => (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    ));

  return (
    <div>
      <h2>Users</h2>
      <input
        text='text'
        value={term}
        onChange={(e) => seTterm(e.target.value)}
      />
      <div>{filterUsers}</div>
    </div>
  );
};

export default UserList;
