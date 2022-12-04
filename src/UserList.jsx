import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [trem, seTtrem] = useState(' ');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      setUsers(json);
    };
    fetchUsers();
  }, []);

  let renderUsers = users.map((user) => (
    <div key={user.id}>
      <p>
        <strong>{user.name}</strong>
      </p>
    </div>
  ));

  return (
    <div>
      <input
        text='text'
        value={trem}
        onChange={(e) => seTtrem(e.target.value)}
      />
      <div>{renderUsers}</div>
    </div>
  );
};

export default UserList;
